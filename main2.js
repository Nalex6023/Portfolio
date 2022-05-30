gsap.fromTo(".loader", { y: "100%" }, { y: 0, duration: 0.7, stagger: 2 });
gsap.fromTo(
  ".line",
  { width: "0%" },
  { width: "100%", duration: 0.5, stagger: 2, delay: 0.6 }
);
gsap.fromTo(
  ".loader",
  { y: 0 },
  { y: "-100%", duration: 1, delay: 1.6, ease: "power3", display: "none" }
);
gsap.fromTo(
  ".main",
  { display: "none" },
  { display: "block", duration: 0.1, delay: 1.8 }
);
gsap.fromTo(".first h1", { y: 200 }, { y: 0, delay: 2.5 });

gsap.fromTo(
  ".image",
  { transform: "scale(1.2)", opacity: 0 },
  { transform: "scale(1)", opacity: 1, delay: 2.5 }
);
const image = document.querySelector(".img-container");
const image2 = document.querySelector(".img-container2");
const showProject = function (para, text) {
  para.addEventListener("click", function () {
    gsap.fromTo(text, { y: 0 }, { y: "-100%", display: "block", duration: 1 });
    gsap.fromTo(
      ".close",
      { display: " none" },
      { display: "block ", delay: 0.3 }
    );
  });
};
showProject(image, ".project1");
showProject(image2, ".project2");
const close = document.querySelector(".close h2");
const closeProject = function (para, text) {
  para.addEventListener("click", function () {
    gsap.fromTo(text, { y: "-100%" }, { y: 0, display: "none", duration: 1 });
    gsap.fromTo(".close", { display: "bloxk" }, { display: "none" });
  });
};
closeProject(close, ".project1");
closeProject(close, ".project2");
