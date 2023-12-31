import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
