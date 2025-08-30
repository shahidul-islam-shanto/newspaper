// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFWi6jmLXlB8lAeD05RNQyeeXd3V1sSUU",
  authDomain: "newspaper-8c792.firebaseapp.com",
  projectId: "newspaper-8c792",
  storageBucket: "newspaper-8c792.firebasestorage.app",
  messagingSenderId: "765998265184",
  appId: "1:765998265184:web:b3ed293994f4d6105fa405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
