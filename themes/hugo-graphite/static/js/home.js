const main = document.getElementById("main");
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 20) {
    main.classList.add("shrinkHeader");
  } else {
    main.classList.remove("shrinkHeader");
  }
});

setTimeout(() =>
  document
    .querySelectorAll(".noAnimate")
    .forEach((e) => e.classList.remove("noAnimate"))
);
