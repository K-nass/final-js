document.addEventListener('DOMContentLoaded', handleChangeOfLoginNavBtn);
function handleChangeOfLoginNavBtn(stateOfUser) {
    const navItemLogin = document.querySelector(".nav-item-login");
    const navItemLogout = document.getElementById("logOutBtn");
    const navItemAccount = document.getElementById('myAccount');
    if (stateOfUser) {
        navItemAccount.style.display = 'block';
        navItemLogout.style.display = 'block';
        navItemLogin.style.display = 'none';
    } else {
        navItemLogin.style.display = 'block';
        navItemAccount.style.display = 'none';
        if (navItemLogout) navItemLogout.style.display = 'none';
    }
}

export { handleChangeOfLoginNavBtn }