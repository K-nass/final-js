document.addEventListener('DOMContentLoaded', handleChangeOfLoginNavBtn)
function handleChangeOfLoginNavBtn(stateOfUser) {
    const navItemLogin = document.querySelector(".nav-item-login");
    stateOfUser ? navItemLogin.style.display = "none" : navItemLogin.style.display = "block";
}

export { handleChangeOfLoginNavBtn }