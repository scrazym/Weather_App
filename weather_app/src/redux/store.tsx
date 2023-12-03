import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "./weatherSlice";
import weatherWeekSlice from "./weekWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    weatherWeek: weatherWeekSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
