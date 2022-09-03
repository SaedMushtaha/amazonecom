import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf1WExl1JO_f7BL5jA0kdslwA-7LXyq9A",
  authDomain: "app-2d194.firebaseapp.com",
  projectId: "app-2d194",
  storageBucket: "app-2d194.appspot.com",
  messagingSenderId: "963982379568",
  appId: "1:963982379568:web:5773d91e2a33653b9efbf5",
  measurementId: "G-XTNL5PDH4W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const analytics = getAnalytics(firebaseApp);

export { db, auth, analytics };