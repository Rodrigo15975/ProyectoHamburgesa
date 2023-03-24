// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmIYrHEaDUCvWBCFb0fcm_-ImZ5ssMTZ0",
  authDomain: "authroles-69f2b.firebaseapp.com",
  projectId: "authroles-69f2b",
  storageBucket: "authroles-69f2b.appspot.com",
  messagingSenderId: "873036551376",
  appId: "1:873036551376:web:6e6638ece502875d5ebad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);