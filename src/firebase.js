import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCc2t328lyo1i1dUW8lihrw64p3nVGhlrY",
  authDomain: "ecommerce-again-92efc.firebaseapp.com",
  projectId: "ecommerce-again-92efc",
  storageBucket: "ecommerce-again-92efc.appspot.com",
  messagingSenderId: "1059222315519",
  appId: "1:1059222315519:web:e4c6ca497e2b28b59787ca",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
