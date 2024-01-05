import { createAsyncThunk } from "@reduxjs/toolkit";
import { addWeekWeather } from "redux/weekWeatherSlice";

import Api from "../../../api/axios";

import { Week } from "./IWeekWeather";

export const fetchThreeDaysWeather = createAsyncThunk<void, string>(
  "weather/fetchCurrentWeather",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/forecast.json?key=19166433a4ba41139d581519232711&q=${location}&days=3&aqi=no&alerts=no`
      );
      const { data } = result;
      dispatch(addWeekWeather(data));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const transformDataWeek = (data: Week): FormatWeatherToday => {
  return {
    location: data.forecast.forecastday[0].hour[0].condition.text,
    icon: data.current.condition.icon,
    current_t_C: Math.round(data.current.temp_c),
    condition: data.current.condition.text,
    humidity: data.current.humidity,
    wind_kmH: data.current.wind_kph,
    wind_dir: data.current.wind_dir,
    pressure: data.current.pressure_mb,
  };
};

export interface FormatWeatherToday {
  location: string;
  icon: string;
  current_t_C: number;
  condition: string;
  humidity: number;
  wind_kmH: number;
  wind_dir: string;
  pressure: number;
}
