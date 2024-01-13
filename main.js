// Task one

// Extract letters only using map + reduce only !

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixLetters = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  }, 10)
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(mixLetters);
// Elzero

// Task two

// Using filter return the non repeatd letters only !

let myString = "EElllzzzzzzzeroo";

let mySolution = myString.split("").filter(function (ele, index, arr) {
  return arr.indexOf(ele) === index;
}).join("");
console.log(mySolution);
// Elzero

// Task three 

// Using reduce method => make the following array flatten without using the flat method

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero