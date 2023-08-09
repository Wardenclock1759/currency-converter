import { Component } from '@angular/core';
import { TEXT_ENG } from '../../assets/constants/text.constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = TEXT_ENG.TITLE;
  now: number = Date.now();

  updateTime = setInterval(() => {
    this.now = Date.now();
  }, 1000);
}
