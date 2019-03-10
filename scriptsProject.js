document.addEventListener("DOMContentLoaded", function() {


  /* STICKY LOGIC*/
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


/* SCROLL ANIMATIONS LOGIC*/
$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp');
      }
    });
  });
});
