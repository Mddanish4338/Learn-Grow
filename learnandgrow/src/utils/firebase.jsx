import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification,
  deleteUser 
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUiFNv9S-I05EGFQUtlOR86Y7J5Z6xs0U",
    authDomain: "prototype-724a3.firebaseapp.com",
    projectId: "prototype-724a3",
    storageBucket: "prototype-724a3.firebasestorage.app",
    messagingSenderId: "1080404850903",
    appId: "1:1080404850903:web:83f24a37b0d03a88761892",
    measurementId: "G-9HDGDWTV5W"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { 
  auth, 
  db, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  deleteUser, 
  doc, 
  setDoc, 
  getDoc 
};
