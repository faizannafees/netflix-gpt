// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlQf9xJ2W82QbtQ5yTEKEANgawHUeqouw",
  authDomain: "stream-gpt1.firebaseapp.com",
  projectId: "stream-gpt1",
  storageBucket: "stream-gpt1.firebasestorage.app",
  messagingSenderId: "668467903203",
  appId: "1:668467903203:web:0b2c5d65671045490323d6",
  measurementId: "G-19C2E0JXS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
