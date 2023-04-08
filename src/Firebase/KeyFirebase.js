// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseWeb = {
  apiKey: "AIzaSyBSobNFU-J63rGLvyNcl3vZODSyffH53UY",
  authDomain: "loginproviders-7c47b.firebaseapp.com",
  projectId: "loginproviders-7c47b",
  storageBucket: "loginproviders-7c47b.appspot.com",
  messagingSenderId: "482779632394",
  appId: "1:482779632394:web:c81a0814e59a8dd32e60f3"
};

// Initialize Firebase
const app = initializeApp(firebaseWeb);
export const auth = getAuth(app);
export const dbFirestore = getFirestore(app);
export const Google = new GoogleAuthProvider();
export const Facebok = new FacebookAuthProvider();