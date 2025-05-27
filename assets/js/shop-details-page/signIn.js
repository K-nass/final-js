import { auth, signInWithEmailAndPassword } from "./firebase.js";
const signInBtn = document.getElementById('signinBtn');
const email = document.getElementById('signinemail');
const password = document.getElementById('signinPassword');

signInBtn.addEventListener('click', function signin(e) {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "../index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
)
