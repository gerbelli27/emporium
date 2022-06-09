const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("#nav");

function toggleMenu() {
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);

const closeMenu = document.querySelector("#section");

function closeMenuBody() {
  nav.classList.remove("active");
}
closeMenu.addEventListener("click", closeMenuBody);
