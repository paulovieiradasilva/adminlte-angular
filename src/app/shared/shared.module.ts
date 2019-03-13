import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [TopNavbarComponent, SiderbarComponent, FooterComponent, SettingsComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [TopNavbarComponent, SiderbarComponent, FooterComponent, SettingsComponent, BreadcrumbComponent]
})
export class SharedModule { }
