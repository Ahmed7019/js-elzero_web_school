// Task one

// console.log(`${a.slice(0,a.indexOf(" ")+2)}.`);
function getDetails(zName, zAge, zCountry) {
  function namePattern(...name) {
    // Write Your Code Here
    name.push(zName);
    name.join(" ");
    // This function will slice the name and return the first name followed by second name first letter
    function nameSlice(...name) {
      let firstName = name.slice(0, name.indexOf(" ")),
        lastName = name.slice(name.indexOf(" "), name.indexOf(" ") );
      return `${firstName} ${lastName}`;
    }
    return `${nameSlice(zName)}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
