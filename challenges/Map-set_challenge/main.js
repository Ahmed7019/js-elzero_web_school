// Get the output 210

/**
 * You can use * Operator only in calculation
 * Set
 * Spread Operator
 * Math Object Methods 
 */

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(new Set());
console.log([...new Set([...n2, ...n1])]); // 210
