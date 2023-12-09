// Task one
// Print the number 100000 using 13 different methods

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_000_00); // 100000
console.log(100000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10e4); // 100000
console.log(10 ** 5); // 100000
console.log(200 * 500); // 100000
console.log(5e4 * 2); // 100000
console.log(2e6 / 20); // 100000
console.log(Math.ceil(99_999.2)); // 100000
console.log(Math.round(99_999.5)); // 100000

// Task two

// print the number 9007199254740991 using MIN_SAFE_INTEGER

console.log(-1 * Number.MIN_SAFE_INTEGER); // 9007199254740991

// Task three

// print the number 16 using MAX_SAFE_INTEGER without using numbers
console.log(Number.MAX_SAFE_INTEGER);

// Task Four

let myVar = "100.56789 Views";
console.log(typeof +myVar, parseInt(myVar)); // 100
console.log(typeof +myVar, +(parseFloat(myVar).toFixed(2))); // 100.57.

// Task five

let num = 10;
// Return the output 2 without typing and number using the function inInteger
console.log(Number.isInteger(num) + +true); // 2

// Task six

// Get the output 10 without repeating any methods nor using any numbers
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(Number.parseFloat(flt))); // 10

// Task seven

// Print a random number in the range from zero to four
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4