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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.now = Date.now();
    this.codes = [CURRENCY_CODES.USD, CURRENCY_CODES.EUR, CURRENCY_CODES.GBP]
    // this.getCurrency(CURRENCY_CODES.RUB, this.codes);
    const kk = new Currency();
    kk.code = 'USD';
    kk.value = 0.01;
    kk._change = 0.01;
    this.fullcodes.push(kk);
    console.log(this.fullcodes);
  }

  updateTime = setInterval(() => {
    this.now = Date.now();
  }, 1000);

  getCurrency(from: string, to: string[]) {
    this.apiService.getCurrency(from, to).subscribe(
      ((res) => {
        const obj = parse(res);
        const len = obj.currencyCodes.length;
        for (let i = 0; i < len; i++) {
          const currency = new Currency();
          currency.code = obj.currencyCodes[i];
          currency.value = obj.currencyValues[i];
          this.fullcodes.push(currency);
        }
      })
    )
  }
}
