let clrSelect = document.querySelectorAll("ul li"),
  box = document.querySelector(".expirement");
//   attr = clrSelect.getAttribute("data-color");

if (window.localStorage.getItem("color")) {
  // [1] Add color to the box
  box.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove active class
  clrSelect.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add active class to the selected one
  document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

clrSelect.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Remove active class
    clrSelect.forEach((li) => {
      li.classList.remove("active");
    });
    //  Add active to current element
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    box.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
