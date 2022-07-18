import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBQW7bgWsT7JKkZ6CSiIc6zkQZADMBNhg",
  authDomain: "esp-app-da2f9.firebaseapp.com",
  databaseURL: "https://esp-app-da2f9-default-rtdb.firebaseio.com",
  projectId: "esp-app-da2f9",
  storageBucket: "esp-app-da2f9.appspot.com",
  messagingSenderId: "834104939939",
  appId: "1:834104939939:web:47b990c07b7fc547dab616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };