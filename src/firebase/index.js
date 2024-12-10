import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyDOgZfWwrYp2FeWNZKhX0w6_w_kXqeD-sc",
    authDomain: "summative-28faa.firebaseapp.com",
    projectId: "summative-28faa",
    storageBucket: "summative-28faa.firebasestorage.app",
    messagingSenderId: "358257829745",
    appId: "1:358257829745:web:29b013c6c676986267b8d0"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };