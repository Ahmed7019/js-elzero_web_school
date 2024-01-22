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
header.style.setProperty("background-color", "white");
header.style.setProperty("width", "100%");
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

// Create content

let content = document.createElement("div"),
  main = document.createElement("main");
for (let i = 0; i <= 15; i++) {
  let product = document.createElement("div"),
    productNum = document.createElement("p"),
    productNumT = document.createTextNode(i),
    productName = document.createElement("span"),
    productNameT = document.createTextNode("Product");
  productNum.appendChild(productNumT);
  productName.appendChild(productNameT);
  product.appendChild(productNum);
  product.appendChild(productName);
  content.appendChild(product);
  main.style.setProperty("padding", "10px");
  main.style.setProperty("background-color", "lightgrey");
  productNum.style.setProperty("font-weight", "bold");
  productNum.style.setProperty("font-size", "20px");
  productName.style.setProperty("font-size", "15px");
  productName.style.setProperty("color", "grey");
  product.style.setProperty("background-color", "white");
  product.style.setProperty("display", "flex");
  product.style.setProperty("flex-direction", "column");
  product.style.setProperty("justify-content", "center");
  product.style.setProperty("align-items", "center");
  product.style.setProperty("align-content", "center");
  product.style.setProperty("padding", "1rem");
}

main.appendChild(content);
document.body.appendChild(main);
// Style body
document.body.style.setProperty("padding","0");
document.body.style.setProperty("margin","0");
// Style the content
content.style.setProperty("background-color", "lightgrey");
content.style.setProperty("display", "grid");
content.style.setProperty("gap", "1%");
content.style.setProperty("grid-template-columns", "repeat(3,auto)");
content.style.setProperty("grid-template-rows", "repeat(4,auto)");
