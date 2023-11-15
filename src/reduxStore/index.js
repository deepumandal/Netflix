import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authSlice";
import movieSlice from "./TrendingMovie";

export const reduxStore = configureStore({
  reducer: {
    // todo
    auth: authenticationSlice,
    trending: movieSlice,
  },
});
