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

// Function to create span element with content inside
let addSpan = () => {
  for (let i = 0; i < current.classList.length; i++) {
    let sp = document.createElement("span");
    // The content within the span is the classes of the current element
    sp.textContent = current.classList.toString().toLowerCase().split(" ")[i];
    classes.appendChild(sp);
  }
};

inputToAddClasses.addEventListener("blur", () => {
  if (current.classList.length > 0 && inputToAddClasses.value != "") {
    addClass(inputToAddClasses.value);
    addSpan();
    inputToAddClasses.value = "";
    current.classList = "";
  } else if (inputToAddClasses.value != "") {
    // added class from input field
    classes.textContent = "";
    addClass(inputToAddClasses.value);
    addSpan();
    inputToAddClasses.value = "";
    current.classList = "";
  } else if (current.classList.length > 0) {
    classes.textContent = "";
    // check if there is a class at the begining
    addSpan();
    current.classList = "";
  } else classes.textContent = "No class found";

  for (let i = 0; i < inputToAddClasses.value; i++) {
    if (inputToAddClasses.value.include(" ")) {
      inputToAddClasses.value.split("");
      addSpan();
    }
  }
});

inputToRmClasses.addEventListener("blur", (classToRemove) => {
  if (current.classList.contains(classToRemove)) {
    rm(classToRemove);
  } else {
    classes.textContent("Class not found");
  }
});
