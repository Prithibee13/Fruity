// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMQPD2ZVorFDGnOANe7ADTRD_rUnBTF_Q",
  authDomain: "fruity-aa4c5.firebaseapp.com",
  projectId: "fruity-aa4c5",
  storageBucket: "fruity-aa4c5.appspot.com",
  messagingSenderId: "1039110769936",
  appId: "1:1039110769936:web:0d36593703dc4577c62995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;