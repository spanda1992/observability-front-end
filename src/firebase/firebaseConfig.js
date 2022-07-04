// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtyECJil3EwhJVM9RWADOgMB2niIShlOA",
  authDomain: "observability-64b11.firebaseapp.com",
  projectId: "observability-64b11",
  storageBucket: "observability-64b11.appspot.com",
  messagingSenderId: "892162446540",
  appId: "1:892162446540:web:41f2f063823b8030b61e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app