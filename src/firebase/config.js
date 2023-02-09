import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAn0t9FexY7GjgIxKMha0pKKov2d8f0CkU",
  authDomain: "chat-app-4c371.firebaseapp.com",
  projectId: "chat-app-4c371",
  storageBucket: "chat-app-4c371.appspot.com",
  messagingSenderId: "36033913245",
  appId: "1:36033913245:web:55e635cf8a0828fe078f74",
  measurementId: "G-BT6NY0J1VB",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
