// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBejb66ATGlHntdOrzU08kQS3cBRYbmeVg",
  authDomain: "netflix-app-78fec.firebaseapp.com",
  projectId: "netflix-app-78fec",
  storageBucket: "netflix-app-78fec.appspot.com",
  messagingSenderId: "782262074348",
  appId: "1:782262074348:web:f6c1cfe46d82ca1c05dec9",
  measurementId: "G-4C8YTK7MSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//////////////////////
export const auth = getAuth();
