import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Week } from "api/IWeekWeather";

import { fetchWeekWeather } from "components/weekPageWeather/getWeekWeather/getWeeklyForecast";

interface IWeekState {
  loading: boolean;
  error: null;
  weekWeather: [] | Week;
}
const initialState: IWeekState = {
  loading: false,
  error: null,
  weekWeather: [],
};

export const weatherWeekSlice = createSlice({
  name: "WeatherWeek",
  initialState,
  reducers: {
    addWeekWeather: (state, action: PayloadAction<Week>) => {
      state.weekWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeekWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeekWeather.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchWeekWeather.rejected,
        (state: { loading: boolean; error: unknown }, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addWeekWeather } = weatherWeekSlice.actions;

export default weatherWeekSlice.reducer;
