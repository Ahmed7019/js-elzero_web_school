// Declare variables
let text = document.querySelector(".input"),
  submitBtn = document.querySelector(".add"),
  tasksDiv = document.querySelector(".tasks"),
  myTasks = [];
let p = document.createElement("p");
// Create function to add the text to tasks
let addElement = function () {
  let pText = text.value;
  let myText = {
    [title]: pText,
  };
  // If the input field is empty do nothing
  if (text.value === "") "";
  else {
    localStorage.setItem("text", JSON.stringify(myText.title));
  }
  tasksDiv.appendChild(document.createElement("p"));
};

myTasks.push(JSON.parse(localStorage.getItem("text")));
submitBtn.addEventListener("click", addElement);
// Create function to create an element
for (let i = 0; i < myTasks.length; i++) {
  p.textContent = myTasks[i];
  console.log(myTasks[i]);
}
// myTasks[myTasks.length] = localStorage.getItem("text");
console.log(myTasks.length);
tasksDiv.appendChild(p);
p.style.setProperty("background-color", "white");
p.style.setProperty("font-size", "20px");
p.style.setProperty("padding", "15px");
p.style.setProperty("margin", "20px auto");
p.style.setProperty("width", "80%");
p.style.setProperty("border-radius", "6px");
