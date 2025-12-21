// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsZ__rla-e9nDI7aP0GSXmWERcf4xFwRY",
  authDomain: "vector-studios.firebaseapp.com",
  projectId: "vector-studios",
  storageBucket: "vector-studios.firebasestorage.app",
  messagingSenderId: "940404063766",
  appId: "1:940404063766:web:0ded4308b46c6e86333f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
