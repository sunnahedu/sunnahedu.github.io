// js/firebase-app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRN1dnss4N7SCZYXUjM-CuYo6TSGV92zQ",
  authDomain: "sunnahedu.github.io",
  projectId: "sunnah-education-hub",
  storageBucket: "sunnahedu.github.io",
  messagingSenderId: "46617822547",
  appId: "1:46617822547:web:ca51ed864eb993c22f8da6",
  measurementId: "G-1MCX2FWCMH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, GoogleAuthProvider, FacebookAuthProvider };
