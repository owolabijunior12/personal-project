import { getApp,getApps,initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
;

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_API_KEY ,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };
//
const firebaseConfig = {
  apiKey: "AIzaSyCJ4F2qKZlDx_oNLxy2OyRHRzuYyKziPBY",
  authDomain: "iboytech-e-commence-project.firebaseapp.com",
  projectId: "iboytech-e-commence-project",
  storageBucket: "iboytech-e-commence-project.appspot.com",
  messagingSenderId: "112553563144",
  appId: "1:112553563144:web:7e7683846e80750e63adbd",
  measurementId: "G-ZSWG7DSNGC"
};

// Initialize Firebase
   const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const storage = getStorage(app);
  export {app ,storage}; 
