// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseWeb = {
  apiKey: "AIzaSyDl7JJ47wTxWfM3Nwuj8aD30VK7smeWQnA",
  authDomain: "login-63389.firebaseapp.com",
  projectId: "login-63389",
  storageBucket: "login-63389.appspot.com",
  messagingSenderId: "369269699025",
  appId: "1:369269699025:web:c00e3ef94ba7ffe11ab0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseWeb);
export const auth = getAuth(app);
export const dbFirestore = getFirestore(app);
