import {OpenWeatherMapModel} from "./open-weather-map-model";

export interface OpenWeatherMapResponse{

    codeRequested: string;
    responseBody: OpenWeatherMapModel;

}