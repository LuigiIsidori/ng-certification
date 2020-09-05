import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private Storagekey= 'zipCode';

    constructor() { }

    addLocation(code: string){
        let zip = this.getAllLocation();
        zip.push(code);
        localStorage.setItem(this.Storagekey,JSON.stringify(zip));
    }

    removeLocation(code: string){
        let zip = this.getAllLocation();
        localStorage.setItem(this.Storagekey,JSON.stringify(zip.filter(zipCode => zipCode!=code)));
    }

    getAllLocation(): string[]{
        let zipString= localStorage.getItem(this.Storagekey);
        let zip: string[];

        if(zipString!=null && zipString.length>0){
            zip= JSON.parse(zipString);
        }
        else zip = [];

        return zip;
    }

}
