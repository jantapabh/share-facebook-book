import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1Wkck-GChtrp2QPXIQyIvvIWmkkiyMgU",
    authDomain: "image-share-facebook.firebaseapp.com",
    projectId: "image-share-facebook",
    storageBucket: "image-share-facebook.appspot.com",
    messagingSenderId: "272657696082",
    appId: "1:272657696082:web:3a8add4dad99609ec9268b",
    measurementId: "G-QH2J1BZTDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };