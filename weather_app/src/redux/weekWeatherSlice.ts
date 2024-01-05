import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { fetchThreeDaysWeather } from "components/weekPageWeather/getWeekWeather/getThreeDaysForecast";
import { Week } from "components/weekPageWeather/getWeekWeather/IWeekWeather";

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
      .addCase(fetchThreeDaysWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThreeDaysWeather.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchThreeDaysWeather.rejected,
        (state: { loading: boolean; error: unknown }, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addWeekWeather } = weatherWeekSlice.actions;

export default weatherWeekSlice.reducer;
