// Task one
// Write a function that says hello to the user
function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") console.log(`Hello Mr ${theName}`);
  else if (theGender === "Female") console.log(`Hello Miss ${theName}`);
  else console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Task two
// Write a function that make arithmatic operations
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (firstNum === undefined || secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  if (operation === "add") console.log(firstNum + secondNum);
  else if (operation === "subtract") console.log(firstNum - secondNum);
  else if (operation === "multiply") console.log(firstNum * secondNum);
  else console.log(firstNum + secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
