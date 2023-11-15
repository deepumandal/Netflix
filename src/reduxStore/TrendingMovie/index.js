import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  trendingMovie: [],
  currentTrailer: {},
};
const movieSlice = createSlice({
  initialState,
  name: "TrendingMovie",
  reducers: {
    addTrendingMovie: (state, actions) => {
      state.trendingMovie = actions.payload;
    },
    addCurrentTrailer: (state, actions) => {
      state.currentTrailer = actions.payload;
    },
  },
});
export const { addTrendingMovie, addCurrentTrailer } = movieSlice.actions;
export default movieSlice.reducer;
