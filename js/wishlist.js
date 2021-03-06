// slider wishlist
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    item: 3,
    loop: false,
    slideMove: 2,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });
});

// Hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
