import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRrOeiHZ6fmh2iOyKJFhYMZZd5AETyMHk",
  authDomain: "contact-book-231ec.firebaseapp.com",
  projectId: "contact-book-231ec",
  storageBucket: "contact-book-231ec.appspot.com",
  messagingSenderId: "378208350180",
  appId: "1:378208350180:web:a253c47d90ebba865fe1f1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
