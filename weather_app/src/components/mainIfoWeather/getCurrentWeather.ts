import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCurrentWeather } from "redux/weatherSlice";

import Api, { transformDataToday } from "../../api/axios";

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

// useEffect(() => {
//     axios
//       .get(
//         "https://api.weatherapi.com/v1/current.json?key=19166433a4ba41139d581519232711&q=Minsk&aqi=no"
//       )
//       .then((response) => {
//         if (!response) {
//           throw new Error();
//         } else {
//           const result = response.data;
//           dispatch(addCurrentWeather(transformDataToday(result)));
//         }
//       });
//   }, []);
