// إعدادات Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBy35JPmxwrzy7VDgnVXemcM0Pz20V4Qvk",
  authDomain: "play-egpt.firebaseapp.com",
  projectId: "play-egpt",
  storageBucket: "play-egpt.firebasestorage.app",
  messagingSenderId: "569921942969",
  appId: "1:569921942969:web:389f3c3cffdf714f083268"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

console.log("✅ Firebase initialized");