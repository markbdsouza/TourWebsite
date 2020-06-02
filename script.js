const navLinks = document.querySelectorAll('.navigation__link');
const navToggle = document.getElementById('navi-toggle');

console.log(navLinks);

function hideNav() {
  console.log(navToggle);
  navToggle.checked = false;
}

navLinks.forEach((el) => {
  el.addEventListener('click', hideNav);
});
