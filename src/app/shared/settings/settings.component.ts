import { SettingsService } from '../../services/services.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {
  }

  myTheme(theme: string, link: any) {
    this._settings.applyTheme(theme);
  }

}
