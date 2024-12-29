// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1lFXOEcP-g9c1C8fhxfYVtIjgJ8A8Kt4",
  authDomain: "islamic-courses-4bbc8.firebaseapp.com",
  projectId: "islamic-courses-4bbc8",
  storageBucket: "islamic-courses-4bbc8.firebasestorage.app",
  messagingSenderId: "733002547901",
  appId: "1:733002547901:web:4548c9494e3c81e4b8add4",
  measurementId: "G-K2JV3H0Q4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { analytics,storage };