import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLogin: () => {},
  },
});
