// Task one
// Select the div element using 15 different method

document.getElementById("elzero");
document.getElementById("elzero").parentNode;
document.getElementsByClassName("element");
document.getElementsByClassName("element")[0];
document.getElementsByName("js");
document.getElementsByTagName("div");
document.getElementsByTagName("div")[0];
document.querySelector("div");
document.querySelector(".element");
document.querySelector("#elzero");
document.querySelector(`[name = "js"]`);
document.querySelectorAll(".element");
document.querySelectorAll("#elzero");
document.querySelectorAll("div");
document.querySelectorAll(`[name = "js"]`);

// Task two

// Change src & alt attributes

let img = document.querySelectorAll("div img");

img.forEach((img) => {
  img.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  img.setAttribute("alt", "Elzero logo");
});

// Task three

// Currency conventor [1 Dollar = 15.6 pound]
// Declare variables
let cash = document.getElementsByName("dollar"),
  result = document.getElementsByClassName("result");
