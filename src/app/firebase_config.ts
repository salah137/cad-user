// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdq4LDTDO8FbBRmfE5P22Smsw_Rnx2vjA",
  authDomain: "cad-app-98fe6.firebaseapp.com",
  projectId: "cad-app-98fe6",
  storageBucket: "cad-app-98fe6.firebasestorage.app",
  messagingSenderId: "208575393444",
  appId: "1:208575393444:web:5cf4bf36824c686fee8031",
  measurementId: "G-2L2NJ90HPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app