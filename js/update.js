import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCP9OERGwYkcOr_DI494CbL2vr6VV94ZQk",
  authDomain: "logincredentialforwebsite.firebaseapp.com",
  projectId: "logincredentialforwebsite",
  storageBucket: "logincredentialforwebsite.appspot.com",
  messagingSenderId: "959450861298",
  appId: "1:959450861298:web:eccc9f1bfae89acc418a6b",
  measurementId: "G-P3L7PJNSYW"
};


document.addEventListener('DOMContentLoaded', function () {
    const auth = getAuth();

    // Check if a user is logged in
    onAuthStateChanged(auth, function (user) {
        if (user) {
            // User is signed in
            console.log("User is signed in:", user);

            const profilePicture = document.getElementById('profilePic');

            // Update the src attribute with the user's profile picture URL
            const photoURL = user.photoURL;
            if (photoURL) {
                console.log("Setting profile picture:", photoURL);
                profilePicture.src = photoURL;
            }
        } else {
            // User is signed out
            console.log("User is signed out");
            // You can handle this case if needed
        }
    });
});
