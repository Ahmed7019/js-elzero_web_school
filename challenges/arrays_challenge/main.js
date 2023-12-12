/**
 * Arrays Challenges
 */

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ammer"];

// Write Code Here

my = my.reverse()

console.log(my.slice(counter - my.indexOf("Gamal"))); //["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(counter,my.length - my.indexOf("Gamal"))); // ["Elham","Mazreo"]

// console.log(); // "Elzero"

// console.log(); // "rO"

