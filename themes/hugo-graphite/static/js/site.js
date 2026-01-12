const menuToggler = document.querySelector("#menuToggler");
const menuItems = document.querySelector("#menuItems");
menuToggler.addEventListener("click", () =>
  menuItems.classList.toggle("showMenu")
);
