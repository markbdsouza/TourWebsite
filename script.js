const navLinks = document.querySelectorAll('.navigation__link');
const navToggle = document.getElementById('navi-toggle');
function hideNav() {
  navToggle.checked = false;
}
navLinks.forEach((el) => {
  el.addEventListener('click', hideNav);
});
