document.addEventListener("DOMContentLoaded", function() {


  /* HAMBURGER MENU */
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
