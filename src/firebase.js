import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBI6EQFgKknfP4H57ucTQim7noRJwfFL6U",
    authDomain: "messenger-47a04.firebaseapp.com",
    projectId: "messenger-47a04",
    storageBucket: "messenger-47a04.appspot.com",
    messagingSenderId: "356029147505",
    appId: "1:356029147505:web:33b5e861e80ecfd008eed0",
  })
  .auth();
