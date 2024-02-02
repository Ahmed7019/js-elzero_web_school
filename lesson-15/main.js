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
let cash = document.querySelector(`[name = "dollar"]`),
  result = document.querySelector(".result");
// Create a function to convert the currency
let currencyConverter = (x) => {
  x = cash.value;
  let converter = x * 15.6;
  return `${x} USD Dollars = ${converter.toFixed(2)} Egyptian Pound`;
};

let x = cash.value;
cash.addEventListener("input", function () {
  result.textContent = currencyConverter(x);
});

// Task Four
// Take each title attribute & HTML content to its correct title

// [1] Declare variables
let titleOne = document.querySelector(".one"),
  titleTwo = document.querySelector(".two");

// [2] Exchange each variable attribute with its sibling attribute
let titleAtt = titleOne.getAttribute("title");
titleOne.setAttribute("title", titleTwo.getAttribute("title"));
titleTwo.setAttribute("title", `${titleAtt}`);
