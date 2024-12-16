import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4dVB0_a7UlAuvsW8E91EGt5UagccSn20",
  authDomain: "todolist-10a5e.firebaseapp.com",
  projectId: "todolist-10a5e",
  storageBucket: "todolist-10a5e.firebasestorage.app",
  messagingSenderId: "125147313633",
  appId: "1:125147313633:web:fe87b0956d68e25e258ea0",
  measurementId: "G-C76QT8VS0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
