import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../component/home/home.component";
import {ForecastPageComponent} from "../component/forecast-page/forecast-page.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'forecast/:zipCode', component: ForecastPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
