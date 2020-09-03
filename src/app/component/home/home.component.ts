import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../service/location.service";
import {OpenWeatherMapService} from "../../service/open-weather-map.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private allLocation: string[]=[];

    constructor(private locationService: LocationService,
                private  openWeatherMapService: OpenWeatherMapService)
    { }

    ngOnInit(): void {
        this.getAllLocation();
    }

    addLocation(code: string){
        this.locationService.addLocation(code);
        this.openWeatherMapService.getWeatherFromZip(code);
        this.getAllLocation();
    }

    removeLocation(code: string){
        this.locationService.removeLocation(code);
        this.getAllLocation();
    }

    private getAllLocation(){
        this.allLocation = this.locationService.getAllLocation();
    }

}
