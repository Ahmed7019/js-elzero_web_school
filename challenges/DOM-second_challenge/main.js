// Declare variables for input fields

let numberInput = document.querySelector("input[name = 'elements']"),
  textInput = document.querySelector("input[name = 'texts']"),
  typeInput = document.querySelector("input[name = 'type']"),
  submitBtn = document.querySelector("input[type = 'submit']"),
  resultDiv = document.querySelector(".results");

// Create a function to take the element type

let elementType = () => {
  let typeOfEle = elementType.value;
  if (typeOfEle.toLowerCase() === "div") {
    let ele = document.createElement("div");
  } else ele = document.createElement("section");
};

// Create a funciton to create an element

let createEle = (ele) => {
  // declare variables to take the values from the input fields
  let numOfElements = numberInput.value,
    eleText = textInput.value;
  for (let i = 0; i < numOfElements; i++) {
    elementType(ele);
    ele.textContent = eleText;
  }
};
