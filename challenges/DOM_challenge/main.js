// DOM challenge

// Create page with 15 cards , header ,and footer

// Create header

let header = document.createElement("header"),
  menu = document.createElement("nav"),
  logoName = document.createElement("h2"),
  meunLinks = document.createElement("a");

header.appendChild(menu);
menu.appendChild(logoName);
menu.appendChild(meunLinks);

document.body.appendChild(header);