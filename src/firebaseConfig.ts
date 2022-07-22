import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDtGTubMFTDSqU4EHfhV9t3xvBtHub21dA",
  authDomain: "shoutouts-28c1f.firebaseapp.com",
  projectId: "shoutouts-28c1f",
  storageBucket: "shoutouts-28c1f.appspot.com",
  messagingSenderId: "503832535137",
  appId: "1:503832535137:web:8ab5573f9da01e605eca20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
