import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncrementCount: (state) => {
      state.value = state.value + 1;
    },
    handleDecrementCount: (state) => {
      state.value = state.value - 1;
    },
    handleIncrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    handleDecrementByAmount: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const {
  handleIncrementCount,
  handleDecrementCount,
  handleIncrementByAmount,
  handleDecrementByAmount,
} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
