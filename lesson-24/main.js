// Task two
let request = new XMLHttpRequest();
request.open("GET", "./articles.json");
request.send();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    let data = request.responseText;
    const mainData = JSON.parse(data);
    // for (let i = 0; i < mainData.length; i++) mainData[i]["category"] = "All";
    console.log(mainData);
    const updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    for (let i = 0; i < mainData.length; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("id", "data");
      document.body.appendChild(mainDiv);
      mainDiv.innerHTML = ` 
      <div>
        <h2>${mainData[i]["title"]}</h2>
        <p>${mainData[i]["body"]}</p>
        <p>Author : ${mainData[i]["author"]}</p>
        <p>Category : ${mainData[i]["category"]}</p>
      </div>
        
        `;
    }
  }
  this.onloadend = function () {
    console.log("Data loaded");
  };
};
