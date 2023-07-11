gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,

  scrollTrigger: {
    trigger: ".square",
    start: "top 30%",
    markers: { startColor: "green", endColor: "red", fontSize: "12px" },
  },
});
