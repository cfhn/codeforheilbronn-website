const main = document.querySelector("#appTidyverseSite");
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 20) {
    main.classList.add("shrinkHeader");
  } else {
    main.classList.remove("shrinkHeader");
  }
});
