import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfBDIHPWMbGuKLvhK7FMIWo-q63H2CzR0",
  authDomain: "clone-de797.firebaseapp.com",
  projectId: "clone-de797",
  storageBucket: "clone-de797.appspot.com",
  messagingSenderId: "715638243403",
  appId: "1:715638243403:web:7c0583ee09a7b0d8974dce",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
