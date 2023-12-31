import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCurrentWeather } from "redux/weatherSlice";

import { WetherFromApi } from "components/mainPageWeather/getWeatherFromApi/IWeather";

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
    location: data.location.name,
    icon: data.current.condition.icon,
    time: data.current.last_updated.slice(-5, -3),
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
  time: string;
  current_t_C: number;
  condition: string;
  humidity: number;
  wind_kmH: number;
  wind_dir: string;
  pressure: number;
}
