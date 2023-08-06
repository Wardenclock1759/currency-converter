import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes: string[] = ['dark', 'light'];

  theme = 'dark';

  constructor() {
    this.themes = ['dark', 'light'];
    this.theme = 'dark';
  }

  getTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

}
