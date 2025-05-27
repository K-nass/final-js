import { auth, signOut } from "./firebase.js";
import { handleChangeOfLoginNavBtn } from "./handleChangeOfLoginNavBtn.js";

const logoutBtn = document.getElementById('logOutBtn');
logoutBtn.addEventListener('click', function () {
    signOut(auth).then(() => {
        handleChangeOfLoginNavBtn(false);
    }).catch((error) => {
        handleChangeOfLoginNavBtn(true);
    });
})