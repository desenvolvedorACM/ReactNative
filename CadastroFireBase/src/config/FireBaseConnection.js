import  firebase from "firebase";

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyC45sr-O5jNp5aLruMWkZwXwY4UVtTPdJU",
    authDomain: "meuapp-7beb4.firebaseapp.com",
    databaseURL: "https://meuapp-7beb4.firebaseio.com",
    projectId: "meuapp-7beb4",
    storageBucket: "meuapp-7beb4.appspot.com",
    messagingSenderId: "472416385671",
    appId: "1:472416385671:web:1fb0039e0cd80a85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;