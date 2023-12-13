import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./searchSlice";
import weatherReducer from "./weatherSlice";
import weatherWeekSlice from "./weekWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    weatherWeek: weatherWeekSlice,
    searchResult: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
