const firebaseConfig = {
  apiKey: "AIzaSyAXNtGnuPpUCZHwiohemWCgenHsWhl8SUk",
  authDomain: "testing-login-reg.firebaseapp.com",
  projectId: "testing-login-reg",
  storageBucket: "testing-login-reg.appspot.com",
  messagingSenderId: "778778225121",
  appId: "1:778778225121:web:60a908230c4f575c670aa0",
  measurementId: "G-H8CCX3TC8X",
  databaseURL: "https://testing-login-reg-default-rtdb.europe-west1.firebasedatabase.app"
};
// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();
  
var acc = document.getElementsByClassName("accordion");
var i;

//Accordion Script
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight+"px";
    } 
  });
}

//login

function login(){

alert("yaya")



}

function register(){

email = document.getElementById("email").value;
password = document.getElementById("pass").value;
username = document.getElementById("username").value;

	// Validate input fields

	// Move on with Auth
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(function () {
			// Declare user variable
			var user = auth.currentUser;

			// Add this user to Firebase Database
			var database_ref = database.ref();

			// Create User data
			var user_data = {
				email: email,
				username: username,
				last_login: Date.now(),
			};

			// Push to Firebase Database
			database_ref.child("users/" + user.uid).set(user_data);

			// DOne
			alert("User Created!!");
		})
		.catch(function (error) {
			// Firebase will use this to alert of its errors
			var error_code = error.code;
			var error_message = error.message;

			alert(error_message);
		});
}