import { Component, Input } from '@angular/core';
import { Currency } from '../../currency';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent {
  @Input() currencyCode: string;

  constructor() {
    // this.currencyCode = {
    //   currencyCode: "USD",
    //   currentValue: 25.3,
    //   percentageChange: 3,
    // };
    this.currencyCode = '';
  }
}
