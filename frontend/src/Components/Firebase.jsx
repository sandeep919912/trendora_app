// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrl1VcjaUYl6vFva5ze004gfxFb9BrL5w",
  authDomain: "trendora-47765.firebaseapp.com",
  projectId: "trendora-47765",
  storageBucket: "trendora-47765.firebasestorage.app",
  messagingSenderId: "744622302367",
  appId: "1:744622302367:web:81d1cb500d273cc7426eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()