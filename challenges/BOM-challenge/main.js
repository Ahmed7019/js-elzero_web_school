// Declare variables
let text = document.querySelector(".input"),
  addBtn = document.querySelector(".add"),
  tasks = document.querySelector(".tasks");

// Create function to add the text to tasks

let addText = () => {
  addBtn.addEventListener("click", function () {
    if (text === "") {
      ("");
    } else {
      // Create a pararaph containts the text from upper div
      let p = document.createElement("p"),
        pText = document.createTextNode("");
      pText = text.innerHTML;
      p.appendChild(pText);
      tasks.appendChild(p);
    }
  });
};
