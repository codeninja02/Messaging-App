var firebaseConfig = {

    apiKey: "<>",
    authDomain: "<>",
    projectId: "<>",
    storageBucket: "<>",
    messagingSenderId: "<>",
    appId: "<>",
    measurementId: "<>"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });