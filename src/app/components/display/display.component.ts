import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/currency';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent {
  @Input() currency: Currency;

  constructor() {
    this.currency = new Currency();
  }
}
