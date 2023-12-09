/**
 * * Task one
 */

// Add Variables Here

let numberOne = 10,
  numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo} \n${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

// * Task two

// Edit the following code and make it work

/**
 * console.log(elzero.innerHTML); // object
 * console.log(typeof elzero); // object
 */

console.log(typeof (elzero = [])); // object
console.log(typeof elzero); // object

// * Task three

/***
 * * Write the following code without using template literals method
 *
 * `I'm In
 *  \\
 *  Love \\ """ '''
 *  ++ With ++
 *  \"""\"""
 *  ""JavaScript""``
 */

console.log(
  '`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\ """\\""" \n ""JavaScript""``'
);

// * Task 4

/***
 * Get the followind output
 * _21_2021_2021_2021_20_
 */

let a = 21;
let b = 20;
let c = "_" + b + "" + a;
console.log("_" + b + "_" + c.repeat(3) + "_" + a + "_"); // _21_2021_2021_2021_20_
