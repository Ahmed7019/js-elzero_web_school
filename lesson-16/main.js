// Task two

let addClass = document.querySelector(".classes-to-add"),
  rmClass = document.querySelector(".classes-to-remove"),
  classes = document.querySelector(".classes-list div");

let add = (x) => {
  x = document.createElement("div");
  x.style.setProperty("background-color", "red");
  x.style.setProperty("color", "white");
  x.style.setProperty("padding", "4px 8px");
  x.style.setProperty("margin", "0 10px");
  x.style.setProperty("border-radius", "8px");
  classes.style.setProperty("display", "flex");
  classes.style.setProperty("justify-content", "center");
  classes.style.setProperty("align-items", "center");
  classes.appendChild(x);
};

let rm = (x) => {
  classes.remove(x);
};
