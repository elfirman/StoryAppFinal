// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfTnwE6WhDqjhL-_I558HTysuxhBRXws",
  authDomain: "storyapp-62577.firebaseapp.com",
  projectId: "storyapp-62577",
  storageBucket: "storyapp-62577.appspot.com",
  messagingSenderId: "373843484830",
  appId: "1:373843484830:web:e41be7048c401ee9441b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };