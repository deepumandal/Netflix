import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  trendingMovie: [],
  currentTrailer: {},
  popularMovie: [],
  nowPlayingMovie: [],
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
    addPopularMovie: (state, actions) => {
      state.popularMovie = actions.payload;
    },
    addNowPlayingMovie: (state, actions) => {
      state.nowPlayingMovie = actions.payload;
    },
  },
});
export const {
  addTrendingMovie,
  addCurrentTrailer,
  addNowPlayingMovie,
  addPopularMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
