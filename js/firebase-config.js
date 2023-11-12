import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCP9OERGwYkcOr_DI494CbL2vr6VV94ZQk",
  authDomain: "logincredentialforwebsite.firebaseapp.com",
  projectId: "logincredentialforwebsite",
  storageBucket: "logincredentialforwebsite.appspot.com",
  messagingSenderId: "959450861298",
  appId: "1:959450861298:web:eccc9f1bfae89acc418a6b",
  measurementId: "G-P3L7PJNSYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('google-signin-button');
googleLogin.addEventListener("click", function(){
  console.log("Attempting Google Sign-in");
})

