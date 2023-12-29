import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    logIn(state) {
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
