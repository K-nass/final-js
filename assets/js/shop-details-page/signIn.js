import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
const signInForm = document.getElementById('signinForm');
const auth = getAuth();
const email = document.getElementById('signinemail');
const password = document.getElementById('signinPassword');

signInForm.addEventListener('submit', function signin(e) {
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
