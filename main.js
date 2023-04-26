const header = document.querySelector("header");
const nav = header.querySelector("nav");
const logo = header.querySelector(".logo");
const logoHeight = logo.offsetHeight;

const toggleStickyNav = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= logoHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  if (scrollTop > 200) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
}

window.addEventListener("scroll", () => {
  toggleStickyNav();
});

window.addEventListener("resize", () => {
  toggleStickyNav();
});
