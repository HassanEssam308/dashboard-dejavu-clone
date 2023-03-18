

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWGJcIQWQ86GxANkx_QvkFJknOnHShPXM",
  authDomain: "dejavu-65fe7.firebaseapp.com",
  projectId: "dejavu-65fe7",
  storageBucket: "dejavu-65fe7.appspot.com",
  messagingSenderId: "766943688283",
  appId: "1:766943688283:web:98f86064843e383503b17e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db= getFirestore(app)