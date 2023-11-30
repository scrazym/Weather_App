import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FormatWeatherToday } from "api/axios";

import { fetchCurrentWeather } from "components/mainIfoWeather/getCurrentWeather";

interface ITodayWeatherState {
  loading: boolean;
  error: null;
  currentWeather: FormatWeatherToday;
  weatherWeek: [] | FormatWeatherToday;
}
const initialState: ITodayWeatherState = {
  loading: false,
  error: null,
  currentWeather: {
    location: "string",
    icon: "string",
    current_t_C: 2,
    condition: "string",
    humidity: 2,
    wind_kmH: 2,
    wind_dir: "string",
    pressure: 2,
    loading: false,
    error: null,
  },
  weatherWeek: [],
};

export const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<FormatWeatherToday>) => {
      state.currentWeather = action.payload;
    },
    addWeatherWeek: (state, action: PayloadAction<FormatWeatherToday>) => {
      state.weatherWeek = action.payload;
    },
    changeCityName: (state) => {
      state.loading = false;
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
      );
  },
});

export const { changeCityName, addCurrentWeather, addWeatherWeek } =
  weatherSlice.actions;

export default weatherSlice.reducer;
