import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

//Config data for the Firebase. Delete later
const firebaseConfig = {
    apiKey: "AIzaSyDGH8eamCUk2B1BbVRzVe85DQCuyRYDgLo",
    authDomain: "okrare2022.firebaseapp.com",
    databaseURL: "https://okrare2022-default-rtdb.firebaseio.com",
    projectId: "okrare2022",
    storageBucket: "okrare2022.appspot.com",
    messagingSenderId: "15173417980",
    appId: "1:15173417980:web:ae26f207d8f59b5c8c5079",
    measurementId: "G-9GSHX2YRJ5"
};

firebase.initializeApp(firebaseConfig)

export default firebase;
