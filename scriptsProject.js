document.addEventListener("DOMContentLoaded", function() {


  // HAMBURGER MENU
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


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "flex";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
