import { app, db } from "./firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const auth = getAuth(app);
const userName = document.getElementById("userName");
const userPhoto = document.getElementById("userPhoto");
const paymentStatus = document.getElementById("paymentStatus");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const email = user.email;
    const docRef = doc(db, "paidUsers", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().paid) {
      userName.textContent = user.displayName;
      userPhoto.src = user.photoURL;
      paymentStatus.textContent = "✅ Paid User";
      paymentStatus.style.color = "green";
    } else {
      alert("Access denied! You need to pay to access the dashboard.");
      await signOut(auth);
      window.location.href = "login.html";
    }
  } else {
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
