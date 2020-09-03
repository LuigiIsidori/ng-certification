import { Injectable } from '@angular/core';
import {Observable, empty } from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private Storagekey= 'zipCode';

    constructor() { }

    addLocation(code: String){
        let zip = this.getAllLocation();
        zip.push(code);
        localStorage.setItem(this.Storagekey,JSON.stringify(zip));
    }

    removeLocation(code: String){
        let zip = this.getAllLocation();
        localStorage.setItem(this.Storagekey,JSON.stringify(zip.filter(zipCode => zipCode!=code)));
    }

    getAllLocation(): String[]{
        let zipString= localStorage.getItem(this.Storagekey);
        let zip: String[];

        if(zipString!=null && zipString.length>0){
            zip= JSON.parse(zipString);
        }
        else zip = [];

        return zip;
    }

}
