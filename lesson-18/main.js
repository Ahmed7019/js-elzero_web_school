// Task one

// [1] Declare variables

// Fonts :
let fonts = document.querySelector("#fonts");

// Colors :
let colors = document.querySelector("#colors");

// Sizes :
let sizes = document.querySelectorAll("#sizes option");

// On selection , change the font family
fonts.addEventListener("change", () => {
  document.body.style.fontFamily = fonts.value;
});

// On selection , change the color
colors.addEventListener("change", () => {
  document.body.style.color = colors.value;
});
