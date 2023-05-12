
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJgkxehIlsmZ_LEhpPpe94o2_TyF1yki0",
  authDomain: "testebdrn.firebaseapp.com",
  projectId: "testebdrn",
  storageBucket: "testebdrn.appspot.com",
  messagingSenderId: "477268869581",
  appId: "1:477268869581:web:d8a596aaa54e2638674484",
  measurementId: "G-52ERE790CY"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);