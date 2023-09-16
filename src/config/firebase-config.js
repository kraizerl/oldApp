// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB0YspHI7wjEUL57Jfrbekz41i1yGM7xEY",

  authDomain: "databasesocialbond.firebaseapp.com",

  projectId: "databasesocialbond",

  storageBucket: "databasesocialbond.appspot.com",

  messagingSenderId: "75471513791",

  appId: "1:75471513791:web:b738e06da5fd0e69557e0a",

  measurementId: "G-MNJJ485ZHG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
