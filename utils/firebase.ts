// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOzdOW_7xz8nu0musiBWXhGxV4pusiWdA",
  authDomain: "ascendant-braid-289221.firebaseapp.com",
  projectId: "ascendant-braid-289221",
  storageBucket: "ascendant-braid-289221.appspot.com",
  messagingSenderId: "334283544930",
  appId: "1:334283544930:web:c7d01c4e4436c365eaf43b"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export default app;

export const db = getFirestore();
export const auth = getAuth();
