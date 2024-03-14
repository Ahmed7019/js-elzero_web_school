// Task two

let inputToAddClasses = document.querySelector(".classes-to-add");
let inputToRmClasses = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element.current");
let classes = document.querySelector(".assign .classes-list div");

let addClass = (x) => {
  current.classList.add(x);
};

let rm = (x) => {
  classes.remove(x);
};

// Function to create spans
let addSpan = () => {
  let sp = document.createElement("span");
  for (let i = 0; i < current.classList.length; i++) {
    sp.textContent = current.classList.toString().toLowerCase().split(" ")[i];
    classes.appendChild(sp);
  }
};

inputToAddClasses.addEventListener("blur", () => {
  addClass(inputToAddClasses.value);
  addSpan();
  inputToAddClasses.value = "";
});
