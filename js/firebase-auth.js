import { app, db } from "./firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const auth = getAuth(app);
const googleBtn = document.getElementById("googleLogin");
const facebookBtn = document.getElementById("facebookLogin");
const loginMessage = document.getElementById("loginMessage");

async function checkPaymentAndRedirect(user) {
  const email = user.email;
  const docRef = doc(db, "paidUsers", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists() && docSnap.data().paid) {
    window.location.href = "dashboard.html";
  } else {
    loginMessage.textContent = "Payment required! Please complete payment before accessing the dashboard.";
    await signOut(auth);
  }
}

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      checkPaymentAndRedirect(result.user);
    } catch (error) {
      loginMessage.textContent = "Login failed: " + error.message;
    }
  });
}

if (facebookBtn) {
  facebookBtn.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      checkPaymentAndRedirect(result.user);
    } catch (error) {
      loginMessage.textContent = "Login failed: " + error.message;
    }
  });
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    checkPaymentAndRedirect(user);
  }
});
