import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OpenWeatherMapService} from "../../service/open-weather-map.service";

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

  zipCode: string;

  constructor(private router: ActivatedRoute,
              private openWeatherMapService: OpenWeatherMapService) { }

  ngOnInit(): void {
    this.getForecast();
  }

  private getForecast(){
    this.router.paramMap.subscribe(
        param => {
          let zipCode = param.get('zipCode');
          this.openWeatherMapService.getFiveDayForecast(zipCode).subscribe(resp => {
            console.log(resp.responseBody)
          })
        }
    )
  }

}
