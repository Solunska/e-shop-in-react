import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJjJ3sW17kQW1qHU-9nfc1sWhoyGKfuLs",
    authDomain: "nabistore-fcbe3.firebaseapp.com",
    projectId: "nabistore-fcbe3",
    storageBucket: "nabistore-fcbe3.appspot.com",
    messagingSenderId: "274197779939",
    appId: "1:274197779939:web:731b8eb811f171ddf2bcd6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth };