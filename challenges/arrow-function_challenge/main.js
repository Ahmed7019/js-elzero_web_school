// Challenge one

/*
  Function Arrow Challenge
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
let user = [];
let name = function (...users) {
  for (let i = 0; i < users.length; i++) {
    user[i] = user.push(users[i]);
    return `String [${user[i]}, => Done !`;
  }
 
};
let names = function (name) {
  // Parameter ?
  return name;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
