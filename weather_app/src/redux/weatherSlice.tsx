import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FormatWeatherToday } from "api/axios";

interface ITodayWeatherState {
  loading: boolean;
  error: null;
  state: FormatWeatherToday;
}
const initialState: ITodayWeatherState = {
  loading: false,
  error: null,
  state: {
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
};

export const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<FormatWeatherToday>) => {
      state.state = action.payload;
    },
    changeCityName: (state) => {
      state.loading = false;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchWeatherToday.pending, (state) => {
  //         state.loading = true;
  //         state.error = null;
  //       })
  //       .addCase(fetchWeatherToday.fulfilled, (state) => {
  //         state.loading = false;
  //       })
  //       .addCase(
  //         fetchWeatherToday.rejected,
  //         (state: { loading: boolean; error: unknown }, action) => {
  //           state.loading = false;
  //           state.error = action.payload;
  //         }
  //       );
  //   },
});

export const { changeCityName, addCurrentWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
