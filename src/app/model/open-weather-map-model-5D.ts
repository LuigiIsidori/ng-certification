import {OpenWeatherMapModel} from "./open-weather-map-model";

export interface OpenWeatherMapModel5D{

    cod: number;
    list: OpenWeatherMapModel[];
    city:{
        name: string;
    }

}