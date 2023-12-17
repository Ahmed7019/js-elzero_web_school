// Challenge one

/*
  Function Arrow Challenge
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let name = function (...users) {
  for (let i = 0; i < users.length; i++) {
    users[i] = `[${users[i]}]`;
  }
  return users;
};
let names = function (name) {
  // Parameter ?
  //   return `String ${name.join("], ")} => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
