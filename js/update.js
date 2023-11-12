import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

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
const auth = getAuth(app);

const user = auth.currentUser;

function updateUserProfile(user){
    const userName = user.displayName;
    const userProfilePicture = user.photoURL;
    console.log(userEmail);

    document.getElementById("userName").textContent = userName;
    document.getElementById("userProfilePicture"). src = userProfilePicture;

}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {

        alert("Create Account & login");
        windows.location.href = "../html/login.html"
    }
})
