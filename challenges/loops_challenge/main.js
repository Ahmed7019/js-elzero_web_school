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
  teamsNumber.push(i + 1);
}

console.log(teamsNumber);
document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
for (let j = 0; j < newAdmins.length; j++) {
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(
    `
    <p>The Admin for team ${teamsNumber[j]} Is ${newAdmins[j]}</p>
    <h2>Team Members:</h2>
    `
  );

  document.write(`</div>`);
}
