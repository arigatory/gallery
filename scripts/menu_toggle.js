function toggleMenu() {
    document.getElementById("navigation-menu").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("navigation-menu").classList.remove("open");
}

let burger = document.getElementById('hamburgerButton');
burger.onclick = toggleMenu;

let x = document.getElementById('closeButton');
x.onclick = closeMenu;