const menubtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
