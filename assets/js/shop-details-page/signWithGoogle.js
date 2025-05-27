import { getAuth, GoogleAuthProvider, signInWithPopup } from "./firebase.js";
const auth = getAuth();


const provider = new GoogleAuthProvider();
const signInForm = document.getElementById('signinForm');

signInForm.addEventListener('submit', function signinWithGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location.href = "../index.html";

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
)





//     import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
// const signInForm = document.getElementById('signinForm');
// const auth = getAuth();
// const email = document.getElementById('signinemail');
// const password = document.getElementById('signinPassword');

// signInForm.addEventListener('submit', function signin(e) {
//     e.preventDefault();
//     const emailValue = email.value;
//     const passwordValue = password.value;
//     signInWithEmailAndPassword(auth, emailValue, passwordValue)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             window.location.href = "../index.html";
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
// }
// )
