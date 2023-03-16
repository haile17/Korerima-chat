import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYDxtcnB_s5odMdfkO4B6rxsBfB8x27f4",
  authDomain: "korerima-chat-4c24c.firebaseapp.com",
  projectId: "korerima-chat-4c24c",
  storageBucket: "korerima-chat-4c24c.appspot.com",
  messagingSenderId: "396017981530",
  appId: "1:396017981530:web:3657c96bcf15a1cd6ae063"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();