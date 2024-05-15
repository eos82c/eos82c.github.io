function toggleMenu() { //declare a function called when the burger menu is clicked
  var menu = document.getElementById("mobileMenu"); //retrieves the mobileMenu ID tag from the html
  if (menu.style.display === "block") { //checks if the display is "block" (showing) if so, then on click hide it, otherwise if it's not "block" display, show the menu.
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}