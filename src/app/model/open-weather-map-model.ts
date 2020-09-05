import {Timestamp} from "rxjs/internal/operators/timestamp";

export interface OpenWeatherMapModel{

    weather: Array<{
        main: string;
        description: string;
    }>;
    main:{
        temp: string;
        temp_min: string;
        temp_max: string;
    }
    name?: string;
    cod?: number;
    dt?: string;
    temp?:{
        min: string,
        max: string
    }

}