// js/firebase-auth.js
import { auth, db, GoogleAuthProvider, FacebookAuthProvider, app } from "./firebase-app.js";
import { signInWithPopup, onAuthStateChanged, signOut } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, getDoc } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore(app);

// Get DOM elements
const googleBtn = document.getElementById("googleLogin");
const facebookBtn = document.getElementById("facebookLogin");
const loginMessage = document.getElementById("loginMessage");

// Check if user has paid
async function checkPaymentAndRedirect(user) {
  const email = user.email;
  const docRef = doc(db, "paidUsers", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists() && docSnap.data().paid) {
    // Redirect to dashboard if paid
    window.location.href = "dashboard.html";
  } else {
    // Show payment required message and logout
    loginMessage.textContent = "Payment required! Please complete payment before accessing the dashboard.";
    await signOut(auth);
  }
}

// Google Login
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      await checkPaymentAndRedirect(result.user);
    } catch (error) {
      loginMessage.textContent = "Login failed: " + error.message;
    }
  });
}

// Facebook Login
if (facebookBtn) {
  facebookBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      await checkPaymentAndRedirect(result.user);
    } catch (error) {
      loginMessage.textContent = "Login failed: " + error.message;
    }
  });
}

// Automatically check payment if user is already logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    await checkPaymentAndRedirect(user);
  }
});

