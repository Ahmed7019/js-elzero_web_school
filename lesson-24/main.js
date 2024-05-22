// Task two
let request = new XMLHttpRequest();
request.open("GET", "./articles.json");
request.send();
console.log(request);
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
  this.onloadend = function () {
    console.log("Data loaded");
  };
};
