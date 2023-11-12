import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider, signInWithRedirect, getRedirectResult  } from "firebase/auth";


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
    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  });