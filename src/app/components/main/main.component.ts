import { Component, OnInit } from '@angular/core';
import { TEXT_ENG } from '../../../assets/constants/text.constants'
import { CURRENCY_CODES } from '../../../assets/constants/currency.constants'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = TEXT_ENG.TITLE;
  now: number = Date.now();
  codes: Array<string> = [];

  ngOnInit(): void {
    this.now = Date.now();
    this.codes = [CURRENCY_CODES.USD, CURRENCY_CODES.EUR, CURRENCY_CODES.GBP]
  }

  updateTime = setInterval(() => {
    this.now = Date.now();
  }, 1000);
}
