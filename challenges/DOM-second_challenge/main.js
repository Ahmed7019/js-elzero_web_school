// Declare variables for input fields

let numberInput = document.querySelector(`[name = "elements"]`);
let textInput = document.querySelector(`[name = "texts"]`),
  typeInput = document.querySelector(`[name = "type"]`),
  div = document.querySelector(`[value = "Div"]`),
  section = document.querySelector(`[value = "Section"]`),
  submitBtn = document.querySelector(`[name = "create"]`),
  resultDiv = document.querySelector(".results"),
  arr = [];
// Create a function to take the element type
let elementType = () => {
  let typeOfEle = typeInput.value,
    x = textInput.value;
  if (typeOfEle === "Div") {
    let ele = document.createElement("div");
    ele.style.setProperty("padding", "1rem");
    ele.style.setProperty("width", "200px");
    ele.style.setProperty("border-radius", "8px");
    ele.style.setProperty("background-color", "blue");
    ele.style.setProperty("color", "white");
    ele.style.setProperty("text-align", "center");
    ele.textContent = x;
    resultDiv.appendChild(ele);
    for (let i = 0; i < numberInput.value; i++) {
      localStorage.setItem(`elements${[i]}`, arr.push(ele));
    }
  } else {
    ele = document.createElement("section");
    ele.style.setProperty("padding", "1rem");
    ele.style.setProperty("width", "200px");
    ele.style.setProperty("border-radius", "8px");
    ele.style.setProperty("background-color", "blue");
    ele.style.setProperty("color", "white");
    ele.style.setProperty("text-align", "center");
    ele.textContent = x;
    resultDiv.appendChild(ele);
  }
};

// Load elements of page refresh
window.addEventListener("load", () => {
  for (let i = 0; i < numberInput.value; i++) resultDiv.appendChild(ele[i]);
});

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
