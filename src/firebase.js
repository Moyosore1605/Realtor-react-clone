// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFL36_3We5RJQajdXbiZhv1_BktoZSYGw",
    authDomain: "realtor-react-clone-3ba3b.firebaseapp.com",
    projectId: "realtor-react-clone-3ba3b",
    storageBucket: "realtor-react-clone-3ba3b.appspot.com",
    messagingSenderId: "497261631770",
    appId: "1:497261631770:web:8c6a7b4a24b91bade2b4a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();