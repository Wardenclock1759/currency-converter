import { Component } from '@angular/core';
import { TEXT_ENG } from '../../assets/constants/text.constants'

@Component({
  selector: 'app-converter',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  title = TEXT_ENG.TITLE;
  today: number = Date.now();
  lag = this.today % 1000;

  updateTime = setInterval(() => {
    this.today = Date.now();
    this.lag = 0;
  }, 1000-this.lag);
}
