import { auth, GoogleAuthProvider, signInWithPopup } from "./firebase.js";


const signinForm = document.getElementById('signinForm');
signinForm.addEventListener('submit', (e) => e.preventDefault());

const provider = new GoogleAuthProvider();
const signinGoogleBtn = document.getElementById('signinGoogle');
signinGoogleBtn.addEventListener('click', function signinWithGoogle(e) {
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
