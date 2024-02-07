// Declare variables for input fields

let numberInput = document.querySelector("input[name = 'elements']"),
  textInput = document.querySelector("input[name = 'texts']"),
  typeInput = document.querySelector("input[name = 'type']"),
  submitBtn = document.querySelector("input[type = 'submit']"),
  resultDiv = document.querySelector(".results");

// Create a function to make the elements based on input type

let elementType = () => {
  let typeOfEle = elementType.value;
  if (typeOfEle.toLowerCase() === "div") {
    let ele = document.createElement("div");
  } else ele = document.createElement("section");
};
