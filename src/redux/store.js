import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counterSlice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
