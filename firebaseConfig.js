// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage}from "firebase/storage"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzaigkchHgEK7hmhLsi1K9piEAUbe2Au0",
  authDomain: "awaas-vishwa-listing.firebaseapp.com",
  projectId: "awaas-vishwa-listing",
  storageBucket: "awaas-vishwa-listing.appspot.com",
  messagingSenderId: "609952424568",
  appId: "1:609952424568:web:fc96cb028bfd20f46f038d",
  measurementId: "G-EXQK2J89NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)