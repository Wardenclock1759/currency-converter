import { Component } from '@angular/core';
import { TEXT_ENG } from '../../assets/constants/text.constants'

@Component({
  selector: 'app-converter',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = TEXT_ENG.TITLE;
}
