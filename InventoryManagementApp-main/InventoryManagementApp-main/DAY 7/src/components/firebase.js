
// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkBvBxg1xgHLkHfOfP-oSfOMnup2PL2qc",
  authDomain: "supermarket-eb873.firebaseapp.com",
  projectId: "supermarket-eb873",
  storageBucket: "supermarket-eb873.appspot.com",
  messagingSenderId: "44726456992",
  appId: "1:44726456992:web:b35f50c29b802192b62fc5",
  measurementId: "G-TR71QSW3XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default firebase;