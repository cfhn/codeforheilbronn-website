const updateHeader = () => {
  if (window.scrollY > 20) {
    $("#main").addClass("shrinkHeader");
  } else {
    $("#main").removeClass("shrinkHeader");
  }
};

updateHeader();
setTimeout(() => $("#main").removeClass("noAnimate"));

$(window).on("scroll", updateHeader);
