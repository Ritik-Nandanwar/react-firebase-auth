// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj0fZ8OrsdSXOE2G-HLlZA9gn340sVRLI",
  authDomain: "switch-ki-tayyari.firebaseapp.com",
  projectId: "switch-ki-tayyari",
  storageBucket: "switch-ki-tayyari.appspot.com",
  messagingSenderId: "936771577117",
  appId: "1:936771577117:web:3bfa13ba059cf871526df4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
};
