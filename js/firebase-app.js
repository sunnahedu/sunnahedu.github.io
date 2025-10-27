<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCRN1dnss4N7SCZYXUjM-CuYo6TSGV92zQ",
    authDomain: "sunnah-education-hub.firebaseapp.com",
    projectId: "sunnah-education-hub",
    storageBucket: "sunnah-education-hub.firebasestorage.app",
    messagingSenderId: "46617822547",
    appId: "1:46617822547:web:ca51ed864eb993c22f8da6",
    measurementId: "G-1MCX2FWCMH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
