import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncrementCount: (count) => {
      count.value += 1;
    },
    handleDecrementCount: (count) => {
      count.value -= 1;
    },
  },
});

export const { handleIncrementCount, handleDecrementCount } =
  counterSlice.actions;
export const selectCount = (count) => count.counter.value;
export default counterSlice.reducer;
