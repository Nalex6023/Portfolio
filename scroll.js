const changeColor = gsap.timeline({
  scrollTrigger: {
    // trigger: ".about",
    scrub: true,
    start: "60%",
    end: "80%",
  },
});
const changeColor2 = gsap.timeline({
  scrollTrigger: {
    // trigger: ".about",
    start: "10%",
    end: "30%",
  },
});
changeColor.fromTo(
  ".main",
  { "background-color": "#f0f0f0" },
  {
    "background-color": "#bcbcb4",
  }
);
changeColor2.fromTo(
  ".first h1",
  { y: 110 },
  {
    y: 0,
    duration: 0.8,
  }
);
changeColor2.fromTo(".second-page .text3", { opacity: 0 }, { opacity: 1 });
changeColor2.fromTo(".line4", { width: "0%" }, { width: "100%" });
const footer = gsap.timeline({
  scrollTrigger: {
    // trigger: ".about",
    start: "70%",
    end: "120%",
  },
});
const projects = document.querySelector(".projects");
projects.addEventListener("mouseover", function () {
  gsap.fromTo(
    ".line2",
    { width: "0%", height: "0px" },
    { width: "100%", height: "0.6px", duration: 0.3 }
  );
});
projects.addEventListener("mouseleave", function () {
  gsap.fromTo(
    ".line2",
    { width: "100%", height: "0.6px" },
    { width: "0%", height: "0px", duration: 0.3 }
  );
});
