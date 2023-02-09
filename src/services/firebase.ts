// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWIqHmvGaZ8aRlTBDvLZEUJ7D84gbJZJQ",
  authDomain: "filaapp-c77fd.firebaseapp.com",
  projectId: "filaapp-c77fd",
  storageBucket: "filaapp-c77fd.appspot.com",
  messagingSenderId: "270812268468",
  appId: "1:270812268468:web:6006e85c2fcc3720aa54e1",
  measurementId: "G-DC9XEV5ZTF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);