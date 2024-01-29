// Declare variables
let text = document.querySelector(".input"),
  submitBtn = document.querySelector(".add"),
  tasksDiv = document.querySelector(".tasks"),
  myTasks = [];
let p = document.createElement("p");
// Create function to add the text to tasks
let addElement = function () {
  // If the input field is empty do nothing
  if (text.value === "") "";
  else {
    let pText = text.value;
    let myText = {
      title: pText,
    };
    localStorage.setItem("text", JSON.stringify(myText.title));
  }
};

submitBtn.addEventListener("click", addElement);
p.textContent = localStorage.getItem("text");
tasksDiv.appendChild(p);
p.textContent = myText.title;
p.style.setProperty("background-color", "white");
p.style.setProperty("font-size", "20px");
p.style.setProperty("padding", "15px");
p.style.setProperty("margin", "20px auto");
p.style.setProperty("width", "80%");
p.style.setProperty("border-radius", "6px");
