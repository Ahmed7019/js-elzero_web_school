// Task one

// [1] Declare variables

// Fonts :
let fonts = document.querySelector("#fonts");

// Colors :
let colors = document.querySelector("#colors");

// Sizes :
let sizes = document.querySelector("#sizes");

// On selection , change the font family
fonts.addEventListener("change", () => {
  document.body.style.fontFamily = fonts.value;
  localStorage.setItem("font-family", fonts.value);
});

// On selection , change the color
colors.addEventListener("change", () => {
  document.body.style.color = colors.value;
  localStorage.setItem("color", colors.value);
});

// On selection , change font size
sizes.addEventListener("change", () => {
  document.body.style.fontSize = `${sizes.value}px`;
  localStorage.setItem("font-size", `${sizes.value}`);
});

window.addEventListener("load", () => {
  document.body.style.fontFamily = localStorage.getItem("font-family");
  document.body.style.color = localStorage.getItem("color");
  document.body.style.fontSize = `${localStorage.getItem("font-size")}px`;
  fonts.value = localStorage.getItem("font-family");
  colors.value = localStorage.getItem("color");
  sizes.value = localStorage.getItem("font-size");
});
