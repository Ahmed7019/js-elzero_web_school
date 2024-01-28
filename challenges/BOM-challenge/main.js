// Declare variables
let text = document.querySelector(".input"),
  submitBtn = document.querySelector(".add"),
  tasksDiv = document.querySelector(".tasks");

// Create function to add the text to tasks

// let addText = () => {
// Create a pararaph containts the text from upper div
//   let p = document.createElement("p"),
//     pText = document.createTextNode();

//   p.appendChild(pText);
//   tasks.appendChild(p);
// };
// Generate a random ID

let ranomId = function () {
  return Math.floor(Math.random() * 1000000);
};
submitBtn.addEventListener("click", function () {
  let p = document.createElement("p");
  let pText = text.value;
  let myText = {
  id: ranomId(),
    title: pText,
  };
  localStorage.setItem("text", myText);
  let textB = document.createTextNode(myText.title);
  p.appendChild(textB);
  tasksDiv.appendChild(p);
  p.style.setProperty("background-color", "white");
  p.style.setProperty("font-size", "20px");
  p.style.setProperty("padding", "15px");
  p.style.setProperty("margin", "20px auto");
  p.style.setProperty("width", "80%");
  p.style.setProperty("border-radius", "6px");
});
