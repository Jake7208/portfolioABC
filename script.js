let trees = document.getElementById("trees");
let island = document.getElementById("island");
let tree2 = document.getElementById("tree2");
let balloons = document.getElementById("balloons");
let lower = document.getElementById("lower");
let lowerDark = document.getElementById("lowerDark");
let next = document.getElementById("next");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  trees.style.top = value * 0.9 + "px";
  island.style.top = value * 0.7 + "px";
  balloons.style.left = value * 1 + "px";
  tree2.style.top = value * 0.5 + "px";
  lower.style.top = value * 0.5 + "px";
});
