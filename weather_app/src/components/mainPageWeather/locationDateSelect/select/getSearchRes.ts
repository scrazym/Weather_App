import { createAsyncThunk } from "@reduxjs/toolkit";
import { addSerchResult } from "redux/searchSlice";

import Api from "../../../../api/axios";

export const fetchSearchRes = createAsyncThunk<void, string>(
  "weather/fetchSearchRes",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/search.json?key=19166433a4ba41139d581519232711&q=${location}`
      );
      const { data } = result;
      const transformData = transformSearchRes(data);
      console.log(transformData, "Transform");
      dispatch(addSerchResult(transformData));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const transformSearchRes = (info: ISearchRes[]): FormatSearchRes[] => {
  return info.map((item) => {
    return {
      value: item.region,
      label: `${item.name} / ${item.country}`,
    };
  });
};

export interface ISearchRes {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface FormatSearchRes {
  value: string;
  label: string;
}
