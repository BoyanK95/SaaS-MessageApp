import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAuLMYcN1fmMM1m-3tIJJrsF1OdnOUFkU",
  authDomain: "saas-translation-message-app.firebaseapp.com",
  projectId: "saas-translation-message-app",
  storageBucket: "saas-translation-message-app.appspot.com",
  messagingSenderId: "521187406587",
  appId: "1:521187406587:web:46b14eff5340c11fbbf65e",
  measurementId: "G-LEX97RFFT3",
};

//Check if app was initialized before, if not initiliaze with firebase, prevent duplicate app initilization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
//   const analytics = getAnalytics(app);
