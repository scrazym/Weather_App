import { IAstroWeek, IForecastDay } from "./IForecastDay";
import { IHourWeek } from "./IHourWeek";
import { ICurrent, ILocation } from "./IWeather";

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
