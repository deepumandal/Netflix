import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorMessage: "",
  user: {},
  isAuthenticated: false,
};
const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    signInUser: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.errorMessage = "";
    },
    loginUser: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.errorMessage = "";
    },
    logOutUser: (state, actions) => {
      state.user = {};
      state.isAuthenticated = false;
      state.errorMessage = "";
    },
  },
});

export const { signInUser, loginUser, logOutUser } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
