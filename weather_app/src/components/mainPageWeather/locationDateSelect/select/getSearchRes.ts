import { createAsyncThunk } from "@reduxjs/toolkit";
import { addSerchResult } from "redux/searchSlice";

import Api from "../../../../api/axios";

export const fetchSearchRes = createAsyncThunk<void, string>(
  "weather/fetchSearchRes",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/search.json?key=08407554697d49a0be280722231910&q=${location}&aqi=no`
      );
      const { data } = result;
      const transformData = transformSearchRes(data);
      console.log(result, "Transform");
      dispatch(addSerchResult(transformData));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const transformSearchRes = (info: ISearchRes[]): FormatSearchRes[] => {
  return info.map((item) => {
    return {
      value: item.country,
      name: item.name,
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
  name: string;
  label: string;
}
