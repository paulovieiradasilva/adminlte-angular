import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LoginModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
