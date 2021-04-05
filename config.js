import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAm40DC3QKpSA09jXUOHVkCy74XXMIzOxc",
    authDomain: "project70-332c2.firebaseapp.com",
    projectId: "project70-332c2",
    storageBucket: "project70-332c2.appspot.com",
    messagingSenderId: "1012756540908",
    appId: "1:1012756540908:web:f5c0a960084871207de4c9"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()
