import { SettingsService } from '../../services/services.index';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {
    this.addChecked();
    // this.addClass();
  }

  myTheme(theme: string) {
    this._settings.applySkin(theme);
  }

  myLayout(layout: string) {
    this._settings.applyLayout(layout);
  }

  addChecked() {
    const el: any = document.getElementsByClassName('selected');
    const layout = this._settings.config.layout;
    for (const ref of el) {
      for (const l of layout) {
        if (ref.getAttribute('data-layout') === l) {
          ref.toggleAttribute('checked', 'checked');
        }
      }
    }
  }
}
