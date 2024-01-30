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
  let p = document.createElement("p"),
    div = document.createElement("div"),
    deleteBtn = document.createElement("input");
  p.textContent = myText.title; // the text within the paragraph
  // The div style
  div.style.setProperty("background-color", "white");
  div.style.setProperty("font-size", "20px");
  div.style.setProperty("padding", "15px");
  div.style.setProperty("margin", "20px auto");
  div.style.setProperty("width", "80%");
  div.style.setProperty("border-radius", "6px");
  div.style.setProperty("display", "flex");
  div.style.setProperty("justify-content", "space-between");
  div.style.setProperty("align-items", "center");
  // The delete button
  deleteBtn.type = "submit";
  deleteBtn.value = "Delete";
  deleteBtn.id = "delete";
  deleteBtn.style.setProperty("padding", "10px");
  deleteBtn.style.setProperty("border-radius", "6px");
  deleteBtn.style.setProperty("border", "none");
  deleteBtn.style.setProperty("background-color", "red");
  deleteBtn.style.setProperty("color", "white");
  deleteBtn.style.setProperty("cursor", "pointer");
  div.appendChild(p);
  div.appendChild(deleteBtn);
  tasksDiv.appendChild(div);
  // Delete Button Function
  deleteBtn.addEventListener("click", () => {
    deleteTask(myText);
    div.remove();
  });
};

let deleteTask = (task) => {
  let index = myTasks.findIndex((item) => item.title === task.title);
  if (index !== -1) {
    myTasks.splice(index, 1);
    localStorage.setItem("text", JSON.stringify(myTasks));
  }
};
// Load tasks from local storage on page load
window.addEventListener("load", () => {
  myTasks = JSON.parse(localStorage.getItem("text")) || [];
  myTasks.forEach((myText) => {
    createPara(myText);
  });
});

submitBtn.addEventListener("click", addElement);
