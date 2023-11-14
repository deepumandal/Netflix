import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authSlice";

export const reduxStore = configureStore({
  reducer: {
    // todo
    auth : authenticationSlice
  },
});
