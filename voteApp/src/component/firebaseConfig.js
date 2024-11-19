import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxIJiVLvuy5J1SqI8p2qBid0y06laslFI",
    authDomain: "votedatabase-f6ce4.firebaseapp.com",
    projectId: "votedatabase-f6ce4",
    storageBucket: "votedatabase-f6ce4.firebasestorage.app",
    messagingSenderId: "536646809637",
    appId: "1:536646809637:web:5096c91383c5c09f2827cc"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);