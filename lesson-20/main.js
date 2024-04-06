// Task one
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
let lastEle = setOfNumbers.values();

for (let i = 0; i < setOfNumbers.size; i++) {
  if (lastEle.next().value === 2) console.log(2);
}
console.log(setOfNumbers.size);

// Task two

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
myFriends.sort();
let myUniqueFriends = new Set(myFriends);
console.log(myUniqueFriends);
// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

// Task three

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map();
myInfoMap.set("username", myInfo.username);
myInfoMap.set("role", myInfo.role);
myInfoMap.set("country", myInfo.country);
console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

// Task four
let theNumber = 100020003000;

console.log(
  ...new Set(
    theNumber
      .toString()
      .split("")
      .filter((num) => {
        return num === "0" ? "" : num;
      })
      .map((num) => {
        return parseInt(num);
      })
  )
);

// Needed Output
// 123;

// Task five
let theName = "Elzero";

console.log(Array.from(theName));
console.log(theName.split(""));
console.log([...theName]);
let nameArr = [];
for (let c of theName) {
  nameArr.push(c);
}
console.log(nameArr);

let secondNameArr = Array.prototype.map.call(theName, (char) => {
  return char;
});

console.log(secondNameArr);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// Task six [challenge]

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let counter = 0;
console.log(chars);
// Sort the array (Numbers then characters)
chars.sort((a, b) => {
  if (typeof a === "number" && typeof b === "string")
    return -1; // Move numbers to the begining
  else if (typeof a === "string" && typeof b === "number") {
    // Move strings to the end
    return 1;
  } else return 0; // Maintain the original order
});
chars.forEach((num) => {
  typeof num === "number" ? counter++ : "";
});

console.log(chars);
// chars.forEach((c, index) => {
//   typeof c === "string" ? chars.copyWithin(index, counter) : "";
// });

console.log(chars);

// console.log(numsArr);
// chars.some(typeof 5)
// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];
