// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6t2XBxv60OsZejpV-oeon7XXQqiVF52w",
  authDomain: "smart-shop-3da83.firebaseapp.com",
  projectId: "smart-shop-3da83",
  storageBucket: "smart-shop-3da83.appspot.com",
  messagingSenderId: "789459102930",
  appId: "1:789459102930:web:24f2d2b230f90cbc30510b",
  measurementId: "G-SZWYJTC09H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
