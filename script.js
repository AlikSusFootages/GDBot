const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbarBasic");

let toggled = false;

navbarBurger.addEventListener("click", () => {
    if (toggled === false) {
        navbarMenu.classList.add("is-active");
        navbarBurger.classList.add("is-active");
        toggled = true;
    } else {
        navbarMenu.classList.remove("is-active");
        navbarBurger.classList.remove("is-active");
        toggled = false;
    }
});