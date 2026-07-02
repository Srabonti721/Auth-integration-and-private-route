// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk9pFeEsw-288CxxtsqKZHKCmwIcwQMko",
  authDomain: "auth-integration-private-aa2db.firebaseapp.com",
  projectId: "auth-integration-private-aa2db",
  storageBucket: "auth-integration-private-aa2db.firebasestorage.app",
  messagingSenderId: "283425657803",
  appId: "1:283425657803:web:fa5ab400bedfd9f05d9c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);