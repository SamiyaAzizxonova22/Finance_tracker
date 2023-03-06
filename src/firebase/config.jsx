import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  Timestamp,
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJR-LnpN4m6HA62eAN-wkkiW251wi-EZc",
  authDomain: "financetracker-e9f92.firebaseapp.com",
  projectId: "financetracker-e9f92",
  storageBucket: "financetracker-e9f92.appspot.com",
  messagingSenderId: "580709661612",
  appId: "1:580709661612:web:551a0f547fc38125b0d809",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  Timestamp,
  collection,
  addDoc,
  onSnapshot,
};
