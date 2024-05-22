// Task one

let getData = (apiLink) => {
  // Return promise with resolve & reject values
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No data found"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("./main.json").then((result) => {
  result.length = 5;
  for (let i = 0; i < result.length; i++) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <h2>${result[i].title}</h2>
      <p>${result[i].description}</p>
      `;
  }

  return result;
});
