import { app, db } from "./firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const email = user.email;
    const docRef = doc(db, "paidUsers", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().paid) {
      console.log("Paid user → access granted");
    } else {
      alert("Access denied! You need to pay to access this course.");
      await signOut(auth);
      window.location.href = "../login.html";
    }
  } else {
    window.location.href = "../login.html";
  }
});
