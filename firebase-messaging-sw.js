importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDJ5nrd-sCZNvCsg3THxXhewT0cBzkDoCI",
  authDomain: "shuttumani-chat.firebaseapp.com",
  projectId: "shuttumani-chat",
  storageBucket: "shuttumani-chat.firebasestorage.app",
  messagingSenderId: "1033302224383",
  appId: "1:1033302224383:web:952bdfed407ab257cf0bca"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification("💌 New message", {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
  });
});
