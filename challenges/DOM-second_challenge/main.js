// Declare variables for input fields

let numberInput = document.querySelector(`[name = "elements"]`);
let textInput = document.querySelector(`[name = "texts"]`),
  typeInput = document.querySelector(`[name = "type"]`),
  div = document.querySelector(`[value = "Div"]`),
  section = document.querySelector(`[value = "Section"]`),
  submitBtn = document.querySelector(`[name = "create"]`),
  resultDiv = document.querySelector(".results");
// Create a function to take the element type
let elementType = () => {
  let typeOfEle = typeInput.value,
    x = textInput.value;
  if (typeInput === div) {
    let ele = document.createElement("div");
    ele = document.createElement("section");
    ele.style.setProperty("padding", "1rem");
    ele.style.setProperty("width", "200px");
    ele.style.setProperty("border-radius", "8px");
    ele.style.setProperty("background-color", "blue");
    ele.style.setProperty("color", "white");
    resultDiv.appendChild(ele);
  } else {
    ele = document.createElement("section");
    ele.style.setProperty("padding", "1rem");
    ele.style.setProperty("width", "200px");
    ele.style.setProperty("border-radius", "8px");
    ele.style.setProperty("background-color", "blue");
    ele.style.setProperty("color", "white");
    resultDiv.appendChild(ele);
  }
};
// Create a funciton to create an element

let createEle = () => {
  // declare variables to take the values from the input fields
  let numOfElements = numberInput.value,
    eleText = textInput.value;
  for (let i = 0; i < numOfElements; i++) {
    elementType();
  }
};
// Add eventlistener to the button

submitBtn.addEventListener("click", createEle);

// prevent form submittion

let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
