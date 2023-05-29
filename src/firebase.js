// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC9GCCwL73QekvCdIbZsLTtle5fOJjI2h4",
    authDomain: "clone-db-26f62.firebaseapp.com",
    projectId: "clone-db-26f62",
    storageBucket: "clone-db-26f62.appspot.com",
    messagingSenderId: "812782512299",
    appId: "1:812782512299:web:3ab2c6bfae043568eb6fee",
    measurementId: "G-V1LGSWT02B"
  };


  
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  
  export { db, auth, createUserWithEmailAndPassword,signInWithEmailAndPassword };


  /*
  app->db rules for read write permissions in firebae db:
  rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/orders/{orderId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.auth.uid == userId;
    }
  }
}
  */