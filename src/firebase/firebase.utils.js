import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBIAwkzmT5BA8QFGxX_G8bnjR-wsVx3Mho",
    authDomain: "helmgart-1547e.firebaseapp.com",
    projectId: "helmgart-1547e",
    storageBucket: "helmgart-1547e.appspot.com",
    messagingSenderId: "825642731207",
    appId: "1:825642731207:web:3d1f6984a8bcaec426a0e2"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
