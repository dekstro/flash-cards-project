// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABhyHRvQ6OVfBCPHx1ylbXZieQYD29UW0",
  authDomain: "flashcard-saas-dc091.firebaseapp.com",
  projectId: "flashcard-saas-dc091",
  storageBucket: "flashcard-saas-dc091.appspot.com",
  messagingSenderId: "480049293156",
  appId: "1:480049293156:web:795f5255f3917bbe0bfc71",
  measurementId: "G-SSFJL7KMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);