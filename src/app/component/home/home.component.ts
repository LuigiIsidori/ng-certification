import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../service/location.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private allLocation: String[]=[];

    constructor(private locationService: LocationService) { }

    ngOnInit(): void {
        this.getAllLocation();
    }

    addLocation(code: String){
        this.locationService.addLocation(code);
        this.getAllLocation();
    }

    removeLocation(code: String){
        this.locationService.removeLocation(code);
        this.getAllLocation();
    }

    private getAllLocation(){
        //this.allLocation = this.locationService.getAllLocation();
        this.allLocation = this.locationService.getAllLocation();
    }

}
