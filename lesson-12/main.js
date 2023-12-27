// Task one

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     // Write Your Code Here
//     // This function will slice the name and return the first name followed by second name first letter
//     return `${zName.slice(0, zName.indexOf(" "))}${zName
//       .slice(zName.indexOf(" "), zName.indexOf(" ") + 2)
//       .toUpperCase()}.`;
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//   }
//   function ageWithMessage(zAge) {
//     // Write Your Code Here

//     let age = zAge.slice(0, 2);
//     return `You Age Is ${age}`;
//   }
//   // 38 Is My Age => Your Age Is 38
//   // 32 Is The Age => Your Age Is 32

//   function countryTwoLetters(zCountry) {
//     // Write Your Code Here
//     return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(
//       zAge
//     )}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Task two

// Turn Each function into arrow function

function itsMe() {
  // First function
  return `Iam A Normal Function`;
}

let arrowF = () => {
  return `Iam Arrow Function`;
};

console.log(itsMe()); // Iam A Normal Function
console.log(arrowF());

// Second function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreator = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreator("https", "elzero", "org"));

// Task three

// Turn the following currying function into arrow function

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Here the arrow function starts

let checkerArrow = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Available`;
    };
  };
};


console.log(checkerArrow("Osama")("Available")(4000));
console.log(checkerArrow("Ahmed")("Not Available")());
