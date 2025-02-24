// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD269BxnX4jOD3mXTCh3-t3J-OIveLstTM",
  authDomain: "e-shop-7c9f7.firebaseapp.com",
  projectId: "e-shop-7c9f7",
  storageBucket: "e-shop-7c9f7.firebasestorage.app",
  messagingSenderId: "1035443372321",
  appId: "1:1035443372321:web:3503c806856769d68ffe60",
  measurementId: "G-S3EYP26H8N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics =  getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

