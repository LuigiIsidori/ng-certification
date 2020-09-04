import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../service/location.service";
import {OpenWeatherMapService} from "../../service/open-weather-map.service";
import {OpenWeatherMapResponse} from "../../model/open-weather-map-response";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private allLocation: string[]=[];
    private allWeather: OpenWeatherMapResponse[]=[];

    constructor(private locationService: LocationService,
                private  openWeatherMapService: OpenWeatherMapService)
    { }

    ngOnInit(): void {
        this.getAllLocation();
    }

    addLocation(code: string){
        if(this.allLocation.filter(zip => zip==code).length==0) {
            this.locationService.addLocation(code);
            this.addWeather(code);
        }
        else alert("this zipCode is already stored")
    }

    removeLocation(code: string){
        this.locationService.removeLocation(code);
        this.openWeatherMapService.removeWeatherMapFromZip(code);
        this.getAllLocation();
    }

    private getAllLocation(){
        this.getAllWeather();
        this.allLocation = this.locationService.getAllLocation();
    }

    private getAllWeather(){
        this.allWeather = this.openWeatherMapService.getAllWeatherMap();
    }

    private addWeather(code: string){
        this.openWeatherMapService.getWeatherFromZip(code).subscribe(
            weather => {
                this.openWeatherMapService.addWeatherInStorage(weather);
                this.getAllWeather();
            });
    }

}
