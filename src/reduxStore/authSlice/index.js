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
    authLoading: (state, actions) => {
      state.loading = true;
      state.errorMessage = "";
    },
    authError: (state, actions) => {
      state.errorMessage = actions.payload;
      state.loading = false;
    },
    UserLoginSignIn: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.errorMessage = "";
      state.loading = false;
    },
    logOutUser: (state, actions) => {
      state.user = {};
      state.isAuthenticated = false;
      state.errorMessage = "";
      state.loading = false;
    },
  },
});

export const { authLoading, authError, UserLoginSignIn, logOutUser } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
