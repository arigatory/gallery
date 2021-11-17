function toggleMenu() {
    document.getElementById("navigationMenu").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("navigationMenu").classList.remove("open");
}

let burger = document.getElementById('hamburgerButton');
burger.onclick = toggleMenu;

let x = document.getElementById('btnCloseMenu');
x.onclick = closeMenu;