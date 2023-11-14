import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/Firebase";

const initialState = {
  loading: false,
  errorMessage: "",
  user: {},
  isAuthenticated: false,
};

// export const createNewUser = createAsyncThunk(
//   "createUserWithEmailAndPassword",
//   async
// );

// export const signInUser = createAsyncThunk(
//   "signInWithEmailAndPassword",
//   async ({ email, password }) => {
//     const response = await signInWithEmailAndPassword(auth, email, password);
//     const { displayName, stsTokenManager, phoneNumber, photoURL, uid } =
//       response.user;
//     const { refreshToken, accessToken, expirationTime } = stsTokenManager;
//     return {
//       displayName,
//       userToken: { refreshToken, accessToken, expirationTime },
//       phoneNumber,
//       photoURL,
//       uid,
//       email,
//     };
//   }
// );

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
  },
});

export const { signInUser, loginUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
