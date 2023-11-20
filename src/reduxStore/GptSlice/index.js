import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt Slice",
  initialState: {
    isGptPage: false,
    searchResults: [],
    searching: false,
  },
  reducers: {
    handleGptPage: (state, action) => {
      state.isGptPage = !state.isGptPage;
    },
    setSearch: (state, action) => {
      state.searching = true;
    },
    setMoviesSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.searching = false;
    },
  },
});

export const { handleGptPage, setSearch, setMoviesSearchResults } =
  GptSlice.actions;
export default GptSlice.reducer;
