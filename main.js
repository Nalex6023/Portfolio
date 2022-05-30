gsap.fromTo(
  ".line",
  { width: "0%" },
  { width: "100%", duration: 0.5, stagger: 2, delay: 0.6 }
);
gsap.fromTo(
  ".loader",
  { y: 0 },
  { y: "-100%", duration: 1, delay: 1.2, ease: "power3", display: "none" }
);
gsap.fromTo(
  ".main",
  { display: "none" },
  { display: "block", duration: 0.1, delay: 1.8 }
);
gsap.fromTo(
  "footer",
  { display: "none" },
  { display: "block", duration: 0.1, delay: 3 }
);
gsap.fromTo(
  ".heading1",
  { y: 100 },
  { y: 0, duration: 0.8, delay: 2.2, ease: "circ.out(2)" }
);
gsap.fromTo(".heading2", { y: 100 }, { y: 0, duration: 0.8, delay: 2.5 });
gsap.fromTo(".heading3", { y: 100 }, { y: 0, duration: 0.8, delay: 2.8 });
gsap.fromTo(".heading-about", { y: 100 }, { y: 0, duration: 0.8, delay: 3 });
