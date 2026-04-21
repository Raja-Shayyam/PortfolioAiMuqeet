import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // PASTE YOUR CONFIG OBJECT HERE
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAInFzj1dB4KFiw8rY4_2pWTSpDm6XgKpk",
  authDomain: "my-portfolio3-a8c3e.firebaseapp.com",
  projectId: "my-portfolio3-a8c3e",
  storageBucket: "my-portfolio3-a8c3e.firebasestorage.app",
  messagingSenderId: "37761648263",
  appId: "1:37761648263:web:196927b375381bc2b11a22",
  measurementId: "G-2PVMC28321"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database) and export it
export const db = getFirestore(app);