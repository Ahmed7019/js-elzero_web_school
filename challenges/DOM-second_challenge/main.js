// Declare variables for input fields

let numberInput = document.querySelector(`[name = "elements"]`);
let textInput = document.querySelector(`[name = "texts"]`),
  typeInput = document.querySelector(`[name = "type"]`),
  submitBtn = document.querySelector(`[name = "create"]`),
  resultDiv = document.querySelector(".results");
// Create a function to take the element type
let elementType = () => {
  let typeOfEle = elementType.value;
  if (typeOfEle.toLowerCase() === "div") {
    let ele = document.createElement("div");
    resultDiv.appendChild(ele);
  } else {
    ele = document.createElement("section");
    resultDiv.appendChild(ele);
  }
};
// Create a funciton to create an element

let createEle = (ele) => {
  // declare variables to take the values from the input fields
  let numOfElements = numberInput.value,
    eleText = textInput.value;
  for (let i = 0; i < numOfElements; i++) {
    elementType(ele);
    ele.textContent = eleText;
    resultDiv.appendChild(ele);
  }
};
// Add eventlistener to the button

submitBtn.addEventListener("click", createEle());

// prevent form submittion

let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
