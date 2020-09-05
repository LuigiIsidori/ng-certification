
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

}