document.addEventListener("DOMContentLoaded", () => {
  console.log(key, "da key");
  const firebaseConfig = {
    apiKey: key,
    authDomain: "fir-dom-auth-practice.firebaseapp.com",
    databaseURL: "https://fir-dom-auth-practice.firebaseio.com",
    projectId: "fir-dom-auth-practice",
    storageBucket: "",
    messagingSenderId: "501853322857",
    appId: "1:501853322857:web:05c9418e7a50eb7523acf8"
  };
  console.log(firebaseConfig);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let txtEmail = document.getElementById("txtEmail");
  let txtPassword = document.getElementById("txtPassword");
  let btnSignUp = document.getElementById("btnSignUp");
  let btnLogin = document.getElementById("btnLogin");
  let btnLogout = document.getElementById("btnLogout");
  console.log(btnLogin);

  btnLogin.addEventListener("click", e => {
    //get email and password
    let email = txtEmail.value;
    let password = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    console.log(email);
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener("click", e => {
    let email = txtEmail.value;
    let password = txtPassword.value;
    const auth = firebase.auth();

    //sign up
    const promise = auth.createUserWithEmailAndPassword(email, password);
  });
});

//realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("not logged in");
  }
});
