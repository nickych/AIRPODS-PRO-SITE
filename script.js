const navbar = document.querySelector(".airpods-navbar");
const originalY = navbar.offsetTop; 

console.log(document.querySelector(".section-01").offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY >= originalY) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

let controller = new ScrollMagic.Controller();
