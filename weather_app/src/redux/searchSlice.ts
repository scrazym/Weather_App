import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { fetchSearchRes } from "components/mainPageWeather/locationDateSelect/select/getSearchRes";

export interface StateOption {
  value: string;
  name: string;
  label: string;
}
interface ISearchState {
  loading: boolean;
  error: null;
  searchResult: StateOption[];
}
const initialState: ISearchState = {
  loading: false,
  error: null,
  searchResult: [
    { value: "Russian", name: "Rome", label: "Rome" },
    { value: "Russian", name: "Moscow", label: "Moscow" },
  ],
};

export const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    addSerchResult: (state, action: PayloadAction<StateOption[]>) => {
      state.searchResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchRes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchRes.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        fetchSearchRes.rejected,
        (state: { loading: boolean; error: unknown }, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addSerchResult } = searchSlice.actions;

export default searchSlice.reducer;
