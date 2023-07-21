// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhZ1HOVv1nTqTtH3toLtRAxRbyukFk5tM",
  authDomain: "react-notes-6f9f4.firebaseapp.com",
  projectId: "react-notes-6f9f4",
  storageBucket: "react-notes-6f9f4.appspot.com",
  messagingSenderId: "189967538366",
  appId: "1:189967538366:web:49941701f6ad2ae1a566ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")