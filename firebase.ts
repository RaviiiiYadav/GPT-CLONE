import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiGx7o1LUzUo2byvA4FdARSme9p6Zh9eI",
  authDomain: "chatgpt-messenger-14087.firebaseapp.com",
  projectId: "chatgpt-messenger-14087",
  storageBucket: "chatgpt-messenger-14087.appspot.com",
  messagingSenderId: "990408337744",
  appId: "1:990408337744:web:68101aa98716221b642455",
  measurementId: "G-4BMHRZP2DL"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};