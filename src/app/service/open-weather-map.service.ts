import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {OpenWeatherMapModel} from "../model/open-weather-map-model";
import {OpenWeatherMapResponse} from "../model/open-weather-map-response";

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherMapService {

    data: OpenWeatherMapModel;
    constructor(private httpClient: HttpClient) {}

    public getWeatherFromZip(code: string){

        let data: OpenWeatherMapModel;
        this.httpClient.get<OpenWeatherMapResponse>('https://api.openweathermap.org/data/2.5/weather',{
            params: {
                'zip':code,
                'appid':'5a4b2d457ecbef9eb2a71e480b947604'
            }}).pipe(map(resp => ({
            codeRequested:code,
            responseBody: resp
        }))).forEach(a =>console.log(a.responseBody));
    }
}
