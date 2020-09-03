import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherMapService {

    constructor(private httpClient: HttpClient) {}

    public getWeatherFromZip(code: string){

        this.httpClient.get<string>('https://api.openweathermap.org/data/2.5/weather',{
            params: {
                'zip':code,
                'appid':'5a4b2d457ecbef9eb2a71e480b947604'
            }}).forEach(value => console.log(JSON.stringify(value)));

    }
}
