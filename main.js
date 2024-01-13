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

let mySolution = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
  })
  .join("");
console.log(mySolution);
// Elzero

// Task three

// Using reduce method => make the following array flatten without using the flat method

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenArray = myArray
  .reduce((acc, current) => {
    return acc.concat(current);
  })
  .split("")
  .filter((ele) => {
    return ele !== ",";
  })
  .join("");
// Elzero

console.log(flattenArray);

// Task four

// Return numbers and invert it's sign

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbersOnly = numsAndStrings
  .filter((ele) => {
    return !isNaN(ele);
  })
  .map((ele) => {
    return -ele;
  });
// [-1, -10, 10, 20, -5, -3]

console.log(numbersOnly);

// Task five

// Use reduce only to get the output 500

// If current element is odd sum the current to the accumulator and if even multiply

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500