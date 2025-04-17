// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAi4CK98L4F7cBPR26a2nmeZCeqkBIZcS8",
  authDomain: "sport-hive-2c7f8.firebaseapp.com",
  projectId: "sport-hive-2c7f8",
  storageBucket: "sport-hive-2c7f8.firebasestorage.app",
  messagingSenderId: "789820411157",
  appId: "1:789820411157:web:70ec10ed732a619e466d1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
