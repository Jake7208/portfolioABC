let trees = document.getElementById("trees");
let backmountain = document.getElementById("backmountain");
let mountains5 = document.getElementById("mountains5");
let mountains4 = document.getElementById("mountains4");
let mountains3 = document.getElementById("mountains3");
let mountains2 = document.getElementById("mountains2");
let frontmountain = document.getElementById("frontmountain");
let person = document.getElementById("person");
let front = document.getElementById("front");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  trees.style.top = value * 1.5 + "px";
  backmountain.style.top = value * 0.8 + "px";
  mountains4.style.top = value * 0.6 + "px";
  mountains5.style.top = value * 0.4 + "px";
  mountains3.style.top = value * 0.6 + "px";
  mountains2.style.top = value * 0.7 + "px";
  frontmountain.style.top = value * 0.6 + "px";
  person.style.top = value * 0.4 + "px";
  front.style.top = value * 0.4 + "px";
});
