/**
 * Loop Challenge
 */

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let newAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  newAdmins[i] = myAdmins[i];
}
console.log(newAdmins);
document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
