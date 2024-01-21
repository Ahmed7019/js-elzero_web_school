// DOM challenge

// Create page with 15 cards , header ,and footer

// Create header

let header = document.createElement("header"),
  menu = document.createElement("nav"),
  logoName = document.createElement("h2"),
  // Links here
  homeLink = document.createElement("a"),
  aboutLink = document.createElement("a"),
  serviceLink = document.createElement("a"),
  contactLink = document.createElement("a");

// Create array of links
links = [homeLink, aboutLink, serviceLink, contactLink];
// Header text
let logoText = document.createTextNode("Elzero"),
  homeText = document.createTextNode("Home"),
  aboutText = document.createTextNode("About"),
  serviceText = document.createTextNode("Service"),
  contactText = document.createTextNode("Contact");
// Create menu links text
linksText = [homeText, aboutText, serviceText, contactText];

header.appendChild(menu);
menu.appendChild(logoName);
menu.appendChild(meunLinks);
logoName.appendChild(logoText);
document.body.appendChild(header);
