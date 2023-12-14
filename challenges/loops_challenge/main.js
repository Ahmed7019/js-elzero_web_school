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
  // Add the admins to new array
  if (myAdmins[i] === "Stop") {
    break;
  }
  newAdmins[i] = myAdmins[i];
}

let teamsNumber = [];
// The number of the teams
for (let i = 0; i < newAdmins.length; i++) {
  teamsNumber.push(i);
}

console.log(teamsNumber);
document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
