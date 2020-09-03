import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { WeatherComponent } from './component/weather/weather.component';
import { LocationComponent } from './component/location/location.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
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
