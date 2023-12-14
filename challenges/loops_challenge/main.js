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

let teamA = [];
let teamS = [];
let teamO = [];
console.log(myEmployees);

for (let i = 0; i < myEmployees.length; i++) {
  if (myEmployees[i][0] === "A") {
    teamA.push(myEmployees[i]);
  } else if (myEmployees[i][0] === "O") {
    teamO.push(myEmployees[i]);
  } else {
    teamS.push(myEmployees[i]);
  }
}

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
  if (j + 1 == 1) {
    for (let i = 0; i < teamA.length; i++) {
      document.write(`- ${i + 1} ${teamA[i]} <br>`);
      document.write(`<br>`);
    }
  } else if(j+1==2) {
    for (let i = 0; i < teamO.length; i++) {
        document.write(`- ${i + 1} ${teamO[i]} <br>`);
        document.write(`<br>`);
      }
  }
  document.write(`</div>`);
}
