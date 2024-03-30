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
