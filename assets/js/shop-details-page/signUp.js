import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "./firebase.js";
import { handleChangeOfLoginNavBtn } from "./handleChangeOfLoginNavBtn.js";

const email = document.getElementById('registerEmail');
const password = document.getElementById('registerPassword');
const registerForm = document.getElementById('registerForm');



registerForm.addEventListener('submit', function signUp(e) {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;


    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "../index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        handleChangeOfLoginNavBtn(true);
    } else {
        handleChangeOfLoginNavBtn(false);
    }
});
