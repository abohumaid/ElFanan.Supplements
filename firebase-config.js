// --- Firebase config ---
const firebaseConfig = {
    apiKey: "AIzaSyABBNyziST2TOTr1YQv7nEAq_V1LVoymo0",
    authDomain: "abo-elela.firebaseapp.com",
    databaseURL: "https://abo-elela-default-rtdb.firebaseio.com",
    projectId: "abo-elela",
    storageBucket: "abo-elela.firebasestorage.app",
    messagingSenderId: "1094481849658",
    appId: "1:1094481849658:web:111289c004cfcfc9ef7403",
    measurementId: "G-V22KTTMVD8"
};
firebase.initializeApp(firebaseConfig);
if (firebase.analytics) firebase.analytics();
const db = firebase.database();

