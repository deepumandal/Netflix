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

export const createNewUser = createAsyncThunk(
  "createUserWithEmailAndPassword",
  async (payload) => {
    const { email, password } = payload;
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const {
      displayName,
      stsTokenManager,
      phoneNumber,
      photoURL,
      uid,
    } = response.user;
    return {
      displayName,
      stsTokenManager,
      phoneNumber,
      photoURL,
      uid,
      email,
    };
  }
);

export const signInUser = createAsyncThunk(
  "signInWithEmailAndPassword",
  async ({ email, password }) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const {
      displayName,
      stsTokenManager,
      phoneNumber,
      photoURL,
      uid,
    } = response.user;
    return {
      displayName,
      stsTokenManager,
      phoneNumber,
      photoURL,
      uid,
      email,
    };
  }
);

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(createNewUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.loading = false;
        state.isAuthenticated = true;
        state.errorMessage = "";
      })
      .addCase(createNewUser.rejected, (state, actions) => {
        state.errorMessage = actions.payload.message;
      });

    // sign in logic
    builder
      .addCase(signInUser.fulfilled, (state, actions) => {
        console.log("actions.payload", actions);
        state.isAuthenticated = true;
        state.user = actions.payload;
      })
      .addCase(signInUser.rejected, (state, actions) => {
        state.errorMessage = actions.payload?.message;
      });
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
