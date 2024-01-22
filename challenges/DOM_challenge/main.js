// DOM challenge

// Create page with 15 cards , header ,and footer

// Create header

let header = document.createElement("header"),
  menu = document.createElement("div"),
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
header.appendChild(logoName);
header.appendChild(menu);
logoName.appendChild(logoText);
for (let i = 0; i < links.length; i++) {
  links[i].classList.add("link");
  links[i].setAttribute("href", "#");
  menu.appendChild(links[i]).appendChild(linksText[i]);
}
document.body.appendChild(header);
// Add style to the header
document.body.style.setProperty("font-family", "arial");
header.style.setProperty("display", "flex");
header.style.setProperty("justify-content", "space-between");
header.style.setProperty("align-items", "center");
document.querySelector("h2").style.setProperty("color", " rgb(35,169,110)");
for (let i = 0; i < links.length; i++) {
  links[i].style.setProperty("text-decoration", "none");
  links[i].style.setProperty("padding", "1rem");
  links[i].style.setProperty("color", "grey");

}
