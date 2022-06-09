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

function menuFixed() {
  const navToTop = nav.getBoundingClientRect().top;

  if (navToTop < 0) {
    btnMenu.classList.add('fixed')
    nav.classList.add('fixed-menu')
  } else {
    btnMenu.classList.remove('fixed')
    nav.classList.remove('fixed-menu')
  }
}

window.addEventListener('scroll', menuFixed)