// Task one

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(
  myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))
); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(
  myFriends.splice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))
); // ["Ahmed", "Elham", "Osama"];
