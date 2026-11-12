import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh7uDFzwc5aUXIrqywUBfRx4dnnPtjU9U",
  authDomain: "mymoney-60bb5.firebaseapp.com",
  projectId: "mymoney-60bb5",
  storageBucket: "mymoney-60bb5.firebasestorage.app",
  messagingSenderId: "954390160346",
  appId: "1:954390160346:web:e8cb79e60ff6971fb456e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//db
export const db = getFirestore(app)

//Auth
export const auth = getAuth()