import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_WwlubmFp7_peH2g3zGoDmzNEzATW9Jw",
  authDomain: "social-media-clone-bd764.firebaseapp.com",
  projectId: "social-media-clone-bd764",
  storageBucket: "social-media-clone-bd764.appspot.com",
  messagingSenderId: "311330610764",
  appId: "1:311330610764:web:95223d1d2a651dac7a1ee9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
