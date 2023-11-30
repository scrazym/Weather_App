import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCurrentHoursWeather } from "redux/weatherSlice";

import Api from "../../../api/axios";

export const fetchCurrentHoursWeather = createAsyncThunk<void, string>(
  "weather/fetchCurrentHourWeather",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/forecast.json?key=19166433a4ba41139d581519232711&q=${location}&days=1&aqi=no&alerts=no`
      );
      const { data } = result;

      const transformData = transformHoursWeather(
        data.forecast.forecastday[0].hour
      );
      dispatch(addCurrentHoursWeather(transformData));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const transformHoursWeather = (data: Array<IHour>) => {
  return data.map((item: IHour): FormatWeatherHours => {
    return {
      time: item.time,
      icon: item.condition.icon,
      temp_C: item.temp_c,
    };
  });
};

export interface FormatWeatherHours {
  time: string;
  icon: string;
  temp_C: number;
}

export interface IHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}
