const secret = require("./secret.json");
const apikey = secret.apikey;
document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: `${apikey}`,
    authDomain: "fir-dom-auth-practice.firebaseapp.com",
    databaseURL: "https://fir-dom-auth-practice.firebaseio.com",
    projectId: "fir-dom-auth-practice",
    storageBucket: "",
    messagingSenderId: "501853322857",
    appId: "1:501853322857:web:05c9418e7a50eb7523acf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
});
