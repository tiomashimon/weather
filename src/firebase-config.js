import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD1vLi2mslFmskeyk7uHMrffCio_8QlLtk",
  authDomain: "weather-82e42.firebaseapp.com",
  projectId: "weather-82e42",
  storageBucket: "weather-82e42.appspot.com",
  messagingSenderId: "202074730197",
  appId: "1:202074730197:web:558ed4e4b508f060bbbc5c",
  measurementId: "G-MZ28WL9FR4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
