import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBfv-8yEopQgTBP_TGBg8h6K77IMNselxc",
  authDomain: "clone-1fb1d.firebaseapp.com",
  projectId: "clone-1fb1d",
  storageBucket: "clone-1fb1d.appspot.com",
  messagingSenderId: "1008242359864",
  appId: "1:1008242359864:web:054c26fffe6d42e3a630cd",
  measurementId: "G-51JPFWY0BD",
});

const auth = getAuth(firebaseApp);
export { auth };
