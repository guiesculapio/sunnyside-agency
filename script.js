const menuButton = document.querySelector(".menu-mobile");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  const isActive = nav.classList.toggle("nav-active");

  menuButton.setAttribute("aria-expanded", isActive);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    menuButton.setAttribute("aria-expanded", false);
  });
});

let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resizing");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resizing");
  }, 150);
});
