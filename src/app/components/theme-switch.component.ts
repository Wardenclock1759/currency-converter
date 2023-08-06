import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {

  theme: string;

  constructor(private themeService: ThemeService) {
    this.theme = 'dark';
  }

  ngOnInit() {
    this.theme = this.themeService.getTheme();
  }

  switchTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(this.theme);
  }

}
