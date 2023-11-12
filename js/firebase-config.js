import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider, signInWithRedirect  } from "firebase/auth";


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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const provider = new GoogleAuthProvider();


  google-signin-button.addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);
  });