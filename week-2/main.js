//  Cahllenge

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400);  0
// console.log(((10 + 20 -(15 * 3)) /( 190 / 10)) * 400);

// Task one

let num = 3;

// Solution One
console.log(num + +"3"); // 6

// Solution Two
console.log(++num + +"2"); // 6

// Soultion Three
console.log(--num + +"3"); // 6

// Soultion Four
console.log(+true + num + +"2"); // 6

// Solution Five
console.log(num + +true + +true + +true); // 6

// Solution Six
console.log(num + +true * "3"); // 6

// Task two

let num_ = "10";

// Solution One
console.log(num_ * +"2"); // 20

// Solution Two
console.log(num_ * (+true + +true)); // 20

// Solution Three
console.log(++num_ + +"9"); // 20

// Solution Four
console.log(--num_ * (+true * +"2")); // 20