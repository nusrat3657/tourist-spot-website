// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('inside firebase config', import.meta.env.VITE_PASS);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "assignment-10-5e6b0.firebaseapp.com",
    projectId: "assignment-10-5e6b0",
    storageBucket: "assignment-10-5e6b0.appspot.com",
    messagingSenderId: "78758964874",
    appId: "1:78758964874:web:31985679646ad036250773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;