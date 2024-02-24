// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-530e1.firebaseapp.com",
  projectId: "mern-real-estate-530e1",
  storageBucket: "mern-real-estate-530e1.appspot.com",
  messagingSenderId: "52665057894",
  appId: "1:52665057894:web:19096f8c252498a21323a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
