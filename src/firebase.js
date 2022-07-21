import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDB4eR5Ja9nJlA8ZmkkaiI9mBxKQv0TSFs",
    authDomain: "ecom-2ceaf.firebaseapp.com",
    projectId: "ecom-2ceaf",
    storageBucket: "ecom-2ceaf.appspot.com",
    messagingSenderId: "659377104191",
    appId: "1:659377104191:web:df504da43a5d79bd675f8a",
    measurementId: "G-7EGC92T4JH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };