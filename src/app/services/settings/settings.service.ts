import { Injectable } from '@angular/core';
import { Settings } from './settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  config: Settings = {
    skin: 'skin-blue',
    layout: [],
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
      this.applySkin(this.config.skin);

    } else {
      this.applySkin(this.config.skin);
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
      'skin-yellow-light'
    );
  }

  addClass() {

  }

  applySkin(skin: string) {
    this.config.skin = skin;
    this.setConfig();
    this.removeClass();
    document.body.classList.add(skin);
  }

  applyLayout(layout?: string) {
    const arr: string[] = this.config.layout;
    const index = arr.indexOf(layout);
    (index !== -1 ? arr.splice(index, 1) : arr.push(layout));
    this.setConfig();
    this.getConfig();
  }
}
