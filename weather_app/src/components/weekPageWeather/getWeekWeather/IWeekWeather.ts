import {
  IAstroWeek,
  IForecastDay,
} from "../../mainPageWeather/getWeatherFromApi/IForecastDay";
import { IHourWeek } from "../../mainPageWeather/getWeatherFromApi/IHourWeek";
import {
  ICurrent,
  ILocation,
} from "../../mainPageWeather/getWeatherFromApi/IWeather";

export interface Week {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: [
      {
        date: "2023-12-03";
        date_epoch: 1701561600;
        day: IForecastDay;
        astro: IAstroWeek;
        hour: Array<IHourWeek>;
      },
    ];
  };
}
