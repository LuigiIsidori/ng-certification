import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {OpenWeatherMapModel} from "../model/open-weather-map-model";
import {OpenWeatherMapResponse} from "../model/open-weather-map-response";

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherMapService {

    private Storagekey= 'weatherMap';

    data: OpenWeatherMapModel;
    constructor(private httpClient: HttpClient) {}

    public getWeatherFromZip(code: string){

        this.httpClient.get<OpenWeatherMapModel>('https://api.openweathermap.org/data/2.5/weather',{
            params: {
                'zip':code,
                'appid':'5a4b2d457ecbef9eb2a71e480b947604'
            }}).pipe(map(resp => (({
            codeRequested:code,
            responseBody: resp
        })))).subscribe( obj => this.addWeatherInStorage(obj));

    }

    private addWeatherInStorage(weather: OpenWeatherMapResponse){

        let weatherMap: OpenWeatherMapResponse[];
        weatherMap = this.getAllWeatherMap();

        if(weatherMap.filter( weatherStored => weatherStored.codeRequested==weather.codeRequested).length!=0){
            this.removeWeatherMap(weather);
            weatherMap = this.getAllWeatherMap();
        }

        weatherMap.push(weather);
        localStorage.setItem(this.Storagekey,JSON.stringify(weatherMap));

    }

    getAllWeatherMap(): OpenWeatherMapResponse[]{

        let weatherMap= localStorage.getItem(this.Storagekey);
        let weather: OpenWeatherMapResponse[];

        if(weatherMap!=null && weatherMap.length>0){
            weather= JSON.parse(weatherMap);
        }
        else weather = [];

        return weather;

    }

    removeWeatherMap(weather: OpenWeatherMapResponse){

        let weatherMap: OpenWeatherMapResponse[] = this.getAllWeatherMap();
        localStorage.setItem(this.Storagekey,JSON.stringify(weatherMap.filter(weatherStored => weatherStored.codeRequested!=weather.codeRequested)));

    }
}
