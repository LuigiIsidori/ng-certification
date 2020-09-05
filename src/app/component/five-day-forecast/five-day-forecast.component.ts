import {Component, Input, OnInit, Output} from '@angular/core';
import {OpenWeatherMapModel} from "../../model/open-weather-map-model";
import {OpenWeatherMapResponse5D} from "../../model/open-weather-map-response-5D";
import {OpenWeatherMapService} from "../../service/open-weather-map.service";
import {Climate} from "../../model/climate";

@Component({
    selector: 'app-five-day-forecast',
    templateUrl: './five-day-forecast.component.html',
    styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

    @Input() zipCode: string;
    @Output() name: string;
    private weatherList: OpenWeatherMapModel[];
    imgUrl: string= 'https://www.angulartraining.com/images/weather';

    constructor(private openWeatherMapService: OpenWeatherMapService){ }

    ngOnInit(): void {
        this.getForecast();
    }

    private getForecast(){

        this.openWeatherMapService.getFiveDayForecast(this.zipCode).subscribe(resp => {
            this.name = resp.responseBody.city.name
            this.weatherList = resp.responseBody.list;
            console.log(this.weatherList);
        });

    }

    getImgUrl(climate: string){

        switch (climate){
            case Climate.Clear:{
                return this.imgUrl + '/sun.png';
                break;
            }
            case Climate.Clouds:{
                return this.imgUrl + '/clouds.png';
                break;
            }
            case Climate.Rain:{
                return this.imgUrl + '/rain.png';
                break;
            }
            case Climate.Snow:{
                return this.imgUrl + '/snow.png'
                break;
            }
        }

    }

}
