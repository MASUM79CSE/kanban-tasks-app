
/*


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1v4tdGD_EForDKu_xAZa9DSNnmLOCIMw",
  authDomain: "kanban-tasks-app.firebaseapp.com",
  projectId: "kanban-tasks-app",
  storageBucket: "kanban-tasks-app.firebasestorage.app",
  messagingSenderId: "468056697867",
  appId: "1:468056697867:web:419f1c4f129c6b339beb0e",
  measurementId: "G-CBNVCMV74G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
*/

// Replace these values with your own Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  
  const app = initializeApp(firebaseConfig);
  
  // Add Firebase features like Firestore or Auth here if needed.
  