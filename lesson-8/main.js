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

// Task two

// Slice method is not allowed

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// Task three

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
