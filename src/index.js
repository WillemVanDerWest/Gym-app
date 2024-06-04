import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB6ucSIMCd5v9iWnXzXDy4a7p_nICNw5RA",
  authDomain: "gym-app-9d180.firebaseapp.com",
  databaseURL: "https://gym-app-9d180-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gym-app-9d180",
  storageBucket: "gym-app-9d180.appspot.com",
  messagingSenderId: "41011493804",
  appId: "1:41011493804:web:aba61726dbb49e6db75809",
  measurementId: "G-BQDRC5NZL5"
  // your config object key and value.
};
// Initialize firebase app.
const app = initializeApp(firebaseConfig);
// Initialize firebase database and get the reference of firebase database object.
const database = getDatabase(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
