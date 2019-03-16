import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../services/services.index';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition sidebar-mini';
    this._settings.getConfig();
    this._settings.addClassLayout();
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
