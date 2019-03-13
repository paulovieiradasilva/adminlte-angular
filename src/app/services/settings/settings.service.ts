import { Injectable } from '@angular/core';
import { Settings } from './settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  config: Settings = {
    theme: 'skin-blue',
    layout: '',
    sidebar: ''
  };

  constructor() {
    this.getConfig();
  }

  setConfig() {
    localStorage.setItem('config', JSON.stringify(this.config));
  }

  getConfig() {
    if (localStorage.getItem('config')) {
      this.config = JSON.parse(localStorage.getItem('config'));
      this.applyTheme(this.config.theme);

    } else {
      this.applyTheme(this.config.theme);
    }
  }

  removeClass() {
    document.body.classList.remove(
      'skin-blue',
      'skin-black',
      'skin-purple',
      'skin-green',
      'skin-red',
      'skin-yellow',
      'skin-blue-light',
      'skin-black-light',
      'skin-purple-light',
      'skin-green-light',
      'skin-red-light',
      'skin-yellow-light',
      'fixed',
      'layout-boxed',
      'sidebar-collapse',
      'control-sidebar-open'
    );
  }

  applyTheme(theme: string) {
    this.config.theme = theme;
    this.setConfig();
    this.removeClass();
    document.body.classList.add(theme);
  }
}
