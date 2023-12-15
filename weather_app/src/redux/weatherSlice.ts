import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCurrentHoursWeather,
  FormatWeatherHours,
} from "components/mainPageWeather/getWeatherFromApi/getCurrentHoursForecast";
import {
  fetchCurrentWeather,
  FormatWeatherToday,
} from "components/mainPageWeather/getWeatherFromApi/getCurrentWeather";

interface ITodayWeatherState {
  loading: boolean;
  error: null;
  currentWeather: FormatWeatherToday;
  CurrentHoursWeather: [] | Array<FormatWeatherHours>;
}
const initialState: ITodayWeatherState = {
  loading: false,
  error: null,
  currentWeather: {
    location: "Minsk",
    icon: "string",
    time: "string",
    current_t_C: 2,
    condition: "string",
    humidity: 2,
    wind_kmH: 2,
    wind_dir: "string",
    pressure: 2,
  },
  CurrentHoursWeather: [],
};

export const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<FormatWeatherToday>) => {
      state.currentWeather = action.payload;
    },
    addCurrentHoursWeather: (
      state,
      action: PayloadAction<Array<FormatWeatherHours>>
    ) => {
      state.CurrentHoursWeather = action.payload;
    },
    changeCityName: (state, action: PayloadAction<string>) => {
      state.currentWeather.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchCurrentWeather.rejected,
        (state: { loading: boolean; error: unknown }, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchCurrentHoursWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentHoursWeather.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchCurrentHoursWeather.rejected,
        (state: { loading: boolean; error: unknown }, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { changeCityName, addCurrentWeather, addCurrentHoursWeather } =
  weatherSlice.actions;

export default weatherSlice.reducer;
