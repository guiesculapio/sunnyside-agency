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
