import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OpenWeatherMapResponse} from "../../model/open-weather-map-response";
import {Climate} from "../../model/climate";

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() weather: OpenWeatherMapResponse;
    @Output() removeEvent = new EventEmitter<string>();
    imgUrl: string= 'https://www.angulartraining.com/images/weather';
    currClimate: string;

    constructor() { }

    ngOnInit(): void {
        this.getImgUrl();
    }

    closeBox(){
        this.removeEvent.emit();
    }

    private getImgUrl(){

        this.currClimate = this.weather.responseBody.weather[0].main;

        switch (this.currClimate){
            case Climate.Clear:{
                this.imgUrl += '/sun.png'
                break;
            }
            case Climate.Clouds:{
                this.imgUrl += '/clouds.png';
                break;
            }
            case Climate.Rain:{
                this.imgUrl += '/rain.png';
                break;
            }
            case Climate.Snow:{
                this.imgUrl += '/snow.png'
                break;
            }
        }

    }
}
