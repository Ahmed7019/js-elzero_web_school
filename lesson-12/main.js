// Task one

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // This function will slice the name and return the first name followed by second name first letter
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .slice(zName.indexOf(" "), zName.indexOf(" ") + 2)
      .toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here

    let age = zAge.slice(0, 2);
    return `You Age Is ${age}`;
  }
  // 38 Is My Age => Your Age Is 38
  // 32 Is The Age => Your Age Is 32

  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
