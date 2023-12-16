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

// Task three
// Calculate the age of user in months, weeks, days, hours,minutes and seconds
function ageInTime(theAge) {
  // Your Code Here
  // First create the formula to calculate in months
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out of Range");
  } else {
    console.log(`The Age in months is ${theAge * 12} month`);
    console.log(`The Age in weeks is ${theAge * 12 * 4} week`);
    console.log(`The Age in days is ${theAge * 12 * 4 * 7} day`);
    console.log(`The Age in hours is ${theAge * 12 * 4 * 7 * 24} hour`);
    console.log(
      `The Age in minutes is ${theAge * 12 * 4 * 7 * 24 * 60} minute`
    );
    console.log(
      `The Age in seconds is ${theAge * 12 * 4 * 7 * 24 * 60 * 60} second`
    );
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Task four

function checkStatus(a, b, c) {
  // Your Code Here

  // Declare variables
  let name = "",
    age = 0,
    status = true;
  // Check if the type of each parameter is compatible with any variable and save it there

  // Variable a
  if (typeof a === typeof name) name = a;
  else if (typeof a === typeof age) age = a;
  else status = a;

  // Variable b
  if (typeof b === typeof name) name = b;
  else if (typeof b === typeof age) age = b;
  else status = b;

  // Variable c
  if (typeof c === typeof name) name = c;
  else if (typeof c === typeof age) age = c;
  else status = c;

  if (status === true)
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  else
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Task five

// Create a function to create select box in html includes options with start & end years

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
