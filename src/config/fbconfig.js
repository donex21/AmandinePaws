import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCXmOyr1MBDNk5gIMSgG5rXaobD4cI1XHI",
    authDomain: "amandine-paws-48c61.firebaseapp.com",
    databaseURL: "https://amandine-paws-48c61-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "amandine-paws-48c61",
    storageBucket: "amandine-paws-48c61.appspot.com",
    messagingSenderId: "907796055027",
    appId: "1:907796055027:web:375932195108081bccc886",
    measurementId: "G-JGPVR9Z7RW"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 
export default firebase;