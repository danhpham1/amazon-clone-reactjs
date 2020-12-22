import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: "AIzaSyAuRFgK9V4PDEeSV95R6_KppY38fWDEwV4",
    authDomain: "challenge-4ba8d.firebaseapp.com",
    databaseURL: "https://challenge-4ba8d.firebaseio.com",
    projectId: "challenge-4ba8d",
    storageBucket: "challenge-4ba8d.appspot.com",
    messagingSenderId: "786979628886",
    appId: "1:786979628886:web:dcac644166fb760e0498f7",
    measurementId: "G-VPTT6D455Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };