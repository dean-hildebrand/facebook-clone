import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2J5V6HRIJ_BtFeW1pJVrZpn9sBkL6xUY",
  authDomain: "facebook-clone-9f12c.firebaseapp.com",
  databaseURL: "https://facebook-clone-9f12c.firebaseio.com",
  projectId: "facebook-clone-9f12c",
  storageBucket: "facebook-clone-9f12c.appspot.com",
  messagingSenderId: "159704301027",
  appId: "1:159704301027:web:dff8f29ad564237fc6f4d6",
  measurementId: "G-CSR5EQS2EX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
