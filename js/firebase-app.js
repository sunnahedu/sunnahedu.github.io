// js/firebase-app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCRN1dnss4N7SCZYXUjM-CuYo6TSGV92zQ",
  authDomain: "sunnahedu.github.io",
  projectId: "sunnah-education-hub",
  storageBucket: "sunnahedu.github.io",
  messagingSenderId: "46617822547",
  appId: "1:46617822547:web:ca51ed864eb993c22f8da6",
  measurementId: "G-1MCX2FWCMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // <-- export this

// Export for other modules
export { app, auth, db, GoogleAuthProvider, FacebookAuthProvider };
