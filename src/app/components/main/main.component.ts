import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiService';
import { TEXT_ENG } from '../../../assets/constants/text.constants'
import { CURRENCY_CODES } from '../../../assets/constants/currency.constants'
import { Currency } from 'src/app/currency';
import { parse } from '../../utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = TEXT_ENG.TITLE;
  now: number = Date.now();
  codes: Array<string> = [];
  fullcodes: Array<Currency> = [];
  isOpened = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.now = Date.now();
    this.codes = [CURRENCY_CODES.USD, CURRENCY_CODES.EUR, CURRENCY_CODES.GBP]
    this.getCurrency(CURRENCY_CODES.RUB, this.codes);
  }

  updateTime = setInterval(() => {
    this.now = Date.now();
  }, 1000);

  updateCurrency = setInterval(() => {
    this.getCurrency(CURRENCY_CODES.RUB, this.codes);
  }, 900000);

  push() {
    this.codes.push(CURRENCY_CODES.CNY, CURRENCY_CODES.JPY, CURRENCY_CODES.TRY);
    this.getCurrency(CURRENCY_CODES.RUB, this.codes);
    this.isOpened = !this.isOpened;
  }

  pop() {
    while (this.codes.length > 3) {
      this.codes.pop();
      this.fullcodes.pop();
    }
    this.isOpened = !this.isOpened;
  }

  getCurrency(from: string, to: string[]) {
    this.apiService.getCurrency(from, to).subscribe(
      ((res) => {
        const obj = parse(res);
        const len = obj.currencyCodes.length;
        const newValues = [];
        for (let i = 0; i < len; i++) {
          const currency = new Currency();
          currency.code = obj.currencyCodes[i];
          currency.prev = this.fullcodes[i]?.value || 0;
          currency.value = obj.currencyValues[i];
          newValues.push(currency);
        }
        this.fullcodes = newValues;
      })
    );
  }
}
