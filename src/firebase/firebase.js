import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1J1y-3GW5pFVhWdPwVuasMS5azkAxwVc",
  authDomain: "themillionactiveusers-6ee96.firebaseapp.com",
  projectId: "themillionactiveusers-6ee96",
  storageBucket: "themillionactiveusers-6ee96.appspot.com",
  messagingSenderId: "190930251175",
  appId: "1:190930251175:web:a951e8517211e7ef16da82"
};

// Initialize Firebase
const firebaseInit = () => initializeApp(firebaseConfig);
export default firebaseInit 
