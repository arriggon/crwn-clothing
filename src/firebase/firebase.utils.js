import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmpe3lrFoz3ENhgsrcLZVc3nPlg1LuJZU",
  authDomain: "crwn-db-bd4e1.firebaseapp.com",
  databaseURL: "https://crwn-db-bd4e1.firebaseio.com",
  projectId: "crwn-db-bd4e1",
  storageBucket: "crwn-db-bd4e1.appspot.com",
  messagingSenderId: "1071217369037",
  appId: "1:1071217369037:web:8fad62829375ccea22ae84",
  measurementId: "G-E4EEWM9Y83",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
