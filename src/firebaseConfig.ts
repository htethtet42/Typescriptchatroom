import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
    apiKey: "AIzaSyAgpR_HEM0kXe8rBX4KCGxbHi4i_qnKg8w",
    authDomain: "typescriptchatroom-8771a.firebaseapp.com",
    projectId: "typescriptchatroom-8771a",
    storageBucket: "typescriptchatroom-8771a.firebasestorage.app",
    messagingSenderId: "220546714494",
    appId: "1:220546714494:web:05cd5877eaeab0c799012f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();