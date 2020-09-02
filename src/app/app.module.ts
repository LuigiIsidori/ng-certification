import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { LocationComponent } from './location/location.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      WeatherComponent,
      LocationComponent
  ],
  bootstrap: [
      AppComponent
  ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        }
    ]
})
export class AppModule { }
