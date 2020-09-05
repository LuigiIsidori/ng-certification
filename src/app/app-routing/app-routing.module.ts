import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../component/home/home.component";
import {FiveDayForecastComponent} from "../component/five-day-forecast/five-day-forecast.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'forecast/:zipCode', component: FiveDayForecastComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
