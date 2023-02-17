import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  filter: any;
}

const initialState: FilterState = {
  filter: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<any>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
