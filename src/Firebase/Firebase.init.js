
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA067V2TxovoaWAoLqr4L98wc0kfo8POjY",
  authDomain: "royals-hotel.firebaseapp.com",
  projectId: "royals-hotel",
  storageBucket: "royals-hotel.appspot.com",
  messagingSenderId: "637172175273",
  appId: "1:637172175273:web:9f71835a969c5f2383b4b8",
  measurementId: "G-R8SJMHXRBL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

