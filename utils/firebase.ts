// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMnt1y9Znp7-fnwl0CoW50RztdkZNay-I",
  authDomain: "netflix-clone-a1745.firebaseapp.com",
  projectId: "netflix-clone-a1745",
  storageBucket: "netflix-clone-a1745.appspot.com",
  messagingSenderId: "766375229904",
  appId: "1:766375229904:web:92fb4db4c4aa3c9cfb61d5"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export default app;

export const db = getFirestore();
export const auth = getAuth();
