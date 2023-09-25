const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menu.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("open");
  menu.classList.remove("bx-x");
});
