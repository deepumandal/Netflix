import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import axios from "axios";
import { TMDB_OPTIONS } from "../utils/constants";

export const CreateNewUserApi = async ({ email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserApi = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUserApi = async () => {
  return await signOut(auth);
};

export const TrendingMovies = (signal) => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    { ...TMDB_OPTIONS, signal }
  );
};

export const getVideoApi = (movie_id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
    TMDB_OPTIONS
  );
};
