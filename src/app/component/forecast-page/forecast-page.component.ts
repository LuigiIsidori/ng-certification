import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FiveDayForecastComponent} from "../five-day-forecast/five-day-forecast.component";

@Component({
    selector: 'app-forecast-page',
    templateUrl: './forecast-page.component.html',
    styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit {

    zipCode: string;
    @ViewChild(FiveDayForecastComponent) child: FiveDayForecastComponent;

    constructor(private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.getZipCode();
    }

    private getZipCode(){
        this.router.paramMap.subscribe( param => {
            this.zipCode = param.get('zipCode');
        });
    }

}
