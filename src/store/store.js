import { createStore } from "@reduxjs/toolkit";
const reducerFn = (state = { count: 0 }, action) => {
  //Synchronous function
  //We should not mutate the original state
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "ADD":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
export const store = createStore(reducerFn);
