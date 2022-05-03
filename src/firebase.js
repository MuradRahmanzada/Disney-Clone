import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "disneyplus-clone-bbf92.firebaseapp.com",
    projectId: "disneyplus-clone-bbf92",
    storageBucket: "disneyplus-clone-bbf92.appspot.com",
    messagingSenderId: "637020600714",
    appId: "1:637020600714:web:62283afe0aa695c774b073",
    measurementId: "G-T08NRWX3QT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export {auth, provider, storage};
export default db;