import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAISrF3UVRms0o-iujeM7fzUEKmEr_lUbE",
    authDomain: "react-redux-toolkit-977e4.firebaseapp.com",
    projectId: "react-redux-toolkit-977e4",
    storageBucket: "react-redux-toolkit-977e4.appspot.com",
    messagingSenderId: "448907103866",
    appId: "1:448907103866:web:3e9c98ca658709c948b5c3"
  };

  const app=initializeApp(firebaseConfig)
  
  const db = getFirestore(app)
  const auth=getAuth(app)

  export {db,auth}