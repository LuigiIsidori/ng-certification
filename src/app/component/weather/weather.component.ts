import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OpenWeatherMapModel} from "../../model/open-weather-map-model";
import {OpenWeatherMapResponse} from "../../model/open-weather-map-response";

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() weather: OpenWeatherMapResponse;
    @Output() removeEvent = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
        console.log(this.weather);
    }

    closeBox(){
        this.removeEvent.emit();
    }
}
