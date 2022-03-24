

import firebase from "firebase";
import "firebase/auth";
import 'firebase/firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAGKLaBvYTEKv8nyySPV_H1yTFBIm5IFXc",
    authDomain: "olxdemo-4eed6.firebaseapp.com",
    projectId: "olxdemo-4eed6",
    storageBucket: "olxdemo-4eed6.appspot.com",
    messagingSenderId: "808075422337",
    appId: "1:808075422337:web:5ce213c0b26f6368c8bb80",
    measurementId: "G-5KYZLG3T17"
  };

export default firebase.initializeApp(firebaseConfig);


