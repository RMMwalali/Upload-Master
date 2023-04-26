// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl4Qa6X00OlGHKb8wH2Qfl-yMWy_ThcSs",
    authDomain: "e-thibiti.firebaseapp.com",
    projectId: "e-thibiti",
    databaseUrl: "https://console.firebase.google.com/u/1/project/e-thibiti/database/e-thibiti-default-rtdb/data/~2F",
    storageBucket: "e-thibiti.appspot.com",
    messagingSenderId: "680583906198",
    appId: "1:680583906198:web:9fc4d0d3a71d62781b53b7",
    measurementId: "G-HYT1217KCE"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Submit form data to Firebase
  const userForm = document.getElementById("userForm");
  
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const userID = document.getElementById("userID").value;
    const kraPin = document.getElementById("kraPin").value;
    const email = document.getElementById("email").value;
    
    const userData = {
      fullName,
      phoneNumber,
      userID,
      kraPin,
      email,
    };
  
    database.ref("users").push(userData);
    userForm.reset();
    
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const fileUploadBtn = document.getElementById('fileUploadBtn');
  
    fileUploadBtn.disabled = true;
  
    userForm.addEventListener('input', function () {
      let isFormValid = true;
  
      for (let i = 0; i < userForm.elements.length; i++) {
        let input = userForm.elements[i];
        if (input.type !== 'submit' && input.type !== 'button') {
          if (!input.checkValidity()) {
            isFormValid = false;
            break;
          }
        }
      }
  
      fileUploadBtn.disabled = !isFormValid;
    });
  });  
  