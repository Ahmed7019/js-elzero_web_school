// Task one

// Create object that returns the output

// Create Your Object Here

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Task two

// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = Object.create({
  property: "Method Three",
});

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
function method(prop) {
  this.property = prop;
}
let objMethodFour = new method("Method Four");
console.log(objMethodFour.property); // "Method Four"

// Task three
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

finalObject = Object.assign(oneNum, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
