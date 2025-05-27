import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyBjRfUhrD8izFBizJxYvGS4PPoLjV5x6Mc",
  authDomain: "iti-e2.firebaseapp.com",
  projectId: "iti-e2",
  storageBucket: "iti-e2.firebasestorage.app",
  messagingSenderId: "394747800497",
  appId: "1:394747800497:web:46ffd532adfab5d7aa2b90"

};
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";


import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  limit,
  query,
  where,
  startAfter,
  setDoc,
  orderBy,
  getCountFromServer,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  collection,
  addDoc,
  getDocs,
  limit,
  query,
  startAfter,
  doc,
  getDoc,
  where,
  setDoc,
  orderBy,
  app,
  getCountFromServer,
  firebaseConfig,
  db,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
};
