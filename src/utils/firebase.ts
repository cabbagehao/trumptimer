import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvgxiw_K2SxwAsfdYqPtmDjeUrKQc2pPI",
  authDomain: "trump-timer-86157.firebaseapp.com",
  projectId: "trump-timer-86157",
  storageBucket: "trump-timer-86157.firebasestorage.app",
  messagingSenderId: "660709393031",
  appId: "1:660709393031:web:f2a5a0437828bf39f76e22",
  measurementId: "G-HEV3V0CRF1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();