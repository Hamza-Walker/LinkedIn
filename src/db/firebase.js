import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA19mcqWn2_PPh5qemZ0qnvLrubmY8RqYI",
  authDomain: "linkedin-7677b.firebaseapp.com",
  projectId: "linkedin-7677b",
  storageBucket: "linkedin-7677b.appspot.com",
  messagingSenderId: "408259975168",
  appId: "1:408259975168:web:d31a46bcc5954469b220e5"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db , auth };
