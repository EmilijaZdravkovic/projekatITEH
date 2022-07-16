// firebase import
import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBaSIx9_uNBgytXCzaZOkQYcYad5sP7cS4",
    authDomain: "order-cf74b.firebaseapp.com",
    projectId: "order-cf74b",
    storageBucket: "order-cf74b.appspot.com",
    messagingSenderId: "876863254203",
    appId: "1:876863254203:web:9fca3258c53ffed964039e"
};


// firebase initialization
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const projectAuth = firebase.auth();

export { projectAuth };