import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase , ref, set, child, get } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
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
const app = initializeApp(firebaseConfig); 
// Initialize variables
const auth = getAuth(app);
const database = getDatabase(app);



const checkAuthState = async() => {
  onAuthStateChanged(auth, user => {
      if(user){
          form.style.display = 'none';
          signoutButton.style.display = 'block';
          get(child(database_ref, `users/${user.uid}`)).then((snapshot) => {
              if (snapshot.exists()) {
                  let gender = snapshot.val().gender;
                  if(gender == "male"){
                  curruser.innerText = `Welcome Mr. ${snapshot.val().display}!` 
                  }else{
                  curruser.innerText = `Welcome Ms. ${snapshot.val().display}!` 
                  }
              } else {
                console.log("No data available");
              }
              }).catch((error) => {
              console.error(error);
            });
          
      }
      else{
          form.style.display = 'flex';
          signoutButton.style.display = 'none';
          curruser.innerText = `Welcome Guest!` 
      }

  })
}
checkAuthState()

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





const Useremail = document.querySelector("#useremail")
const Userpassword = document.querySelector("#userpassword")
const Username = document.querySelector("#username")
const Userdisplay = document.querySelector("#userdisplay")
const Userprov = document.querySelector("#userprov")
const Usertel = document.querySelector("#usertel")
const Usergender = document.querySelector("#usergender")
const form = document.querySelector("#logbar")
const curruser = document.querySelector("#currentuser")
const database_ref = ref(database);

const userSignout = async => {
	signOut(auth);
}

const signoutButton = document.querySelector("#signout");


signoutButton.style.display = 'none'
signoutButton.addEventListener("click", userSignout);

