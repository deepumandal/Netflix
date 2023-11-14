import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

export const CreateNewUserApi = async ({ email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserApi = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
