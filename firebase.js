firebase.initializeApp({
    apiKey: "<>",
    authDomain: "<>",
    projectId: "<>",
    storageBucket: "<>",
    messagingSenderId: "<>",
    appId: "<>",
    measurementId: "<>"
});
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
