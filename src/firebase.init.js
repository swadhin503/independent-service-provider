// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm25DmxN9WiB8bfCnfS00IrajW3dsw-m8",
  authDomain: "assignment-10-5d825.firebaseapp.com",
  projectId: "assignment-10-5d825",
  storageBucket: "assignment-10-5d825.appspot.com",
  messagingSenderId: "389207416939",
  appId: "1:389207416939:web:5ad20eccc5f85f255fd12e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;