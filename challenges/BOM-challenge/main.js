// Declare variables
let text = document.querySelector(".input");
let submitBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let myTasks = [];
// Create function to add the text to tasks
let addElement = function () {
  let pText = text.value;
  let myText = {
    title: [pText],
  };
  // If the input field is empty do nothing
  if (text.value === "") return;
  else {
    myText.title = pText;
    localStorage.setItem("text", JSON.stringify(myText.title));
  }
};

myTasks.push(JSON.parse(localStorage.getItem("text")));
console.log(myTasks);
let createPara = () => {
  let p = document.createElement("p");
  for (let i = 0; i < myTasks.length; i++) {
    p.textContent = myTasks[i];
    console.log(myTasks);
    p.style.setProperty("background-color", "white");
    p.style.setProperty("font-size", "20px");
    p.style.setProperty("padding", "15px");
    p.style.setProperty("margin", "20px auto");
    p.style.setProperty("width", "80%");
    p.style.setProperty("border-radius", "6px");
  }
};
submitBtn.addEventListener("click", function () {
  tasksDiv.appendChild(p);
});
submitBtn.addEventListener("click", addElement);
submitBtn.addEventListener("click", createPara);
// Create function to create an element
// myTasks[myTasks.length] = localStorage.getItem("text");
