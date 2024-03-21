// Task one

// [1] Declare variables

// Fonts :
let fonts = document.querySelector("#fonts");

// Colors :
let green = document.querySelector(`[value = "green"]`),
  blue = document.querySelector(`[value = "blue"]`),
  yellow = document.querySelector(`[value = "yellow"]`),
  red = document.querySelector(`[value = "red"]`),
  violet = document.querySelector(`[value = "violet"]`),
  pink = document.querySelector(`[value = "pink"]`);

// Sizes :
let sizes = document.querySelectorAll("#sizes option");

// On selection , change the font family
fonts.addEventListener("change", () => {
  document.body.style.fontFamily = x.value;
});
