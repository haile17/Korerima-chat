import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBzzyC59zD7pn-sC1pKKo9D1LEXK05SVXk",
  authDomain: "korerima-5b8b6.firebaseapp.com",
  projectId: "korerima-5b8b6",
  storageBucket: "korerima-5b8b6.appspot.com",
  messagingSenderId: "750989944472",
  appId: "1:750989944472:web:2f6dd6787c3f4219a392ed",
  measurementId: "G-QQ21BZ8FKJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();