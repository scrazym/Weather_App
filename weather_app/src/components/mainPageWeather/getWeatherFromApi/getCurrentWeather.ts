import { createAsyncThunk } from "@reduxjs/toolkit";
import { WetherFromApi } from "api/IWeather";
import { addCurrentWeather } from "redux/weatherSlice";

import Api from "../../../api/axios";

export const fetchCurrentWeather = createAsyncThunk<void, string>(
  "weather/fetchCurrentWeather",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/current.json?key=19166433a4ba41139d581519232711&q=${location}&aqi=no`
      );
      const { data } = result;
      const transformData = transformDataToday(data);
      dispatch(addCurrentWeather(transformData));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const transformDataToday = (data: WetherFromApi): FormatWeatherToday => {
  return {
    location: data.location.tz_id,
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
