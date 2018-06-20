import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme: string;

  constructor() {
    this.theme = localStorage.getItem('theme') === 'theme-dark' ? 'theme-dark' : '';
    this.setThemeToHtml();
  }

  changeTheme(): void {
    this.theme = this.theme === 'theme-dark' ? '' : 'theme-dark';
    localStorage.setItem('theme', this.theme);
    this.setThemeToHtml();
  }

  setThemeToHtml(): void {
    document.getElementsByTagName('html')[0].className = this.theme;
  }
}
