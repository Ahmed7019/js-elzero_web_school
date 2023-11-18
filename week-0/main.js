// * Task one
document.write("<h1 id='h1'>Elzero</h1>");
document.getElementById("h1").style.color = "blue";
document.getElementById("h1").style.fontWeight = "bold";
document.getElementById("h1").style.textAlign = "center";
document.getElementById("h1").style.fontSize = "80px";
document.getElementById("h1").style.fontFamily = "arial";
// * Task two
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold;",
  "color:white; background-color:blue; font-size:40px;"
);

// * Task three

console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();
