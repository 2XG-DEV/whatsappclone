import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwykWbne0FnEBK_9Q8Iodz0ceeJaENrnQ",
  authDomain: "whatsappclone-31c5c.firebaseapp.com",
  projectId: "whatsappclone-31c5c",
  storageBucket: "whatsappclone-31c5c.appspot.com",
  messagingSenderId: "1054168052980",
  appId: "1:1054168052980:web:4dacf8e225fa688d8d5aa1",
  measurementId: "G-MVRWB1NRXZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
