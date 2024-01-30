// Declare variables
let text = document.querySelector(".input"),
  submitBtn = document.querySelector(".add"),
  tasksDiv = document.querySelector(".tasks"),
  myTasks = [];

// Create function to add the text to tasks
let addElement = function () {
  let pText = text.value; // save the input text to a variable
  // If the input field is empty do nothing
  if (pText === "") return;
  else {
    let myText = {
      title: pText,
    };
    myTasks.push(myText);
    localStorage.setItem("text", JSON.stringify(myTasks));
    text.value = ""; // Clear the text value
    createPara(myText); // Create new element
  }
};

let createPara = (myText) => {
  let p = document.createElement("p");
  p.textContent = myText.title;
  p.style.setProperty("background-color", "white");
  p.style.setProperty("font-size", "20px");
  p.style.setProperty("padding", "15px");
  p.style.setProperty("margin", "20px auto");
  p.style.setProperty("width", "80%");
  p.style.setProperty("border-radius", "6px");
  tasksDiv.appendChild(p);
};

// Load tasks from local storage on page load
window.addEventListener("load", () => {
  myTasks = JSON.parse(localStorage.getItem("text")) || [];
  myTasks.forEach((myText) => {
    createPara(myText);
  });
});

submitBtn.addEventListener("click", addElement);
