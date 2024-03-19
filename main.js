// Task one

// let numberRange = prompt("Print number From - To", "Example: 5-20");
// let arr = numberRange.split(" ");
// let less = 0;
// let higher = 0;

// arr.forEach((num) => {
//   parseInt(num);
//   +num;
//   if (num === "-") {
//     num = "";
//   } else if (num < arr[2]) {
//     less = parseInt(arr[0]);
//     higher = parseInt(arr[2]);
//   } else if (num > arr[2]) {
//     less = parseInt(arr[2]);
//     higher = parseInt(num);
//   }
// });

// while (less <= higher) {
//   console.log(less);
//   less++;
// }

// Task two

let popup = () => {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let span = document.createElement("span");
  div.style.setProperty("position", "relative");
  div.style.setProperty("top", "15rem");
  div.style.setProperty("left", "50rem");
  div.style.setProperty("display", "flex");
  div.style.setProperty("flex-direction", "column");
  div.style.setProperty("justify-content", "center");
  div.style.setProperty("align-items", "center");
  div.style.setProperty("width", "300px");
  div.style.setProperty("height", "100px");
  div.style.setProperty("padding", "4rem");
  div.style.setProperty("background-color", "lightgrey");
  h2.textContent = "Welcome";
  h2.style.setProperty("font-weight", "bold");
  p.textContent = "Welcome to Elzero web school";
  span.textContent = "X ";
  span.style.setProperty("background-color", "red");
  span.style.setProperty("color", "white");
  span.style.setProperty("font-weight", "bold");
  span.style.setProperty("position", "absolute");
  span.style.setProperty("top", "-10px");
  span.style.setProperty("right", "-10px");
  span.style.setProperty("width", "40px");
  span.style.setProperty("height", "40px");
  span.style.setProperty("display", "flex");
  span.style.setProperty("justify-content", "center");
  span.style.setProperty("align-items", "center");
  span.style.setProperty("cursor", "pointer");
  span.style.setProperty("border-radius", "50%");
  document.body.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(span);

  span.addEventListener("click", () => {
    div.remove();
  });
};

setTimeout(popup, 5000);

// Task three

let ttDiv = document.createElement("div");
ttDiv.style.setProperty("background-color", "lightgrey");
ttDiv.style.setProperty("margin", "1rem auto");
ttDiv.style.setProperty("padding", "10px");
ttDiv.style.setProperty("width", "100px");
ttDiv.style.setProperty("height", "100px");
ttDiv.style.setProperty("display", "flex");
ttDiv.style.setProperty("justify-content", "center");
ttDiv.style.setProperty("align-items", "center");

let ttDivContent = 10;
document.body.appendChild(ttDiv);
ttDiv.textContent = ttDivContent;
let count = setInterval(() => {
  ttDiv.textContent = ttDivContent;
  ttDivContent--;
  if (ttDiv.textContent === "0") clearInterval(count);
}, 1000);
