document.addEventListener("DOMContentLoaded", function() {


  /* STICKY LOGIC */
  const navbar = document.getElementById("navbar");
  const mainContent = document.getElementById("mainContent");

  const sticky = navbar.offsetTop;

  function applySticky() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      mainContent.classList.add("smoothContent");
    } else {
      navbar.classList.remove("sticky");
      mainContent.classList.remove("smoothContent");
    }
  }

  window.onscroll = function() {applySticky()};


  /* HAMBURGER MENU LOGIC */
  const icon = document.getElementById("menuIcon");
  const menu = document.getElementById("extendedMenu");

  icon.addEventListener("click", () => {
    if (icon.classList.contains("rotate90")) {
      icon.classList.remove("rotate90");
      menu.classList.remove("show");
      menu.classList.add("hide");
    } else {
      icon.classList.add("rotate90");
      menu.classList.remove("hide");
      menu.classList.add("show");
    }
  })
});

// AOS ANIMATIONS
$(document).ready(function(){
  AOS.init({
 duration: 1100
});
});
