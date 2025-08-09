import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGK7wUH-hWX9uQFWPtQ9JZ2STYF8zMDE",
  authDomain: "umida-dev.firebaseapp.com",
  projectId: "umida-dev",
  storageBucket: "umida-dev.firebasestorage.app",
  messagingSenderId: "153796089596",
  appId: "1:153796089596:web:2cc4218f9d8a8992a62979",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
