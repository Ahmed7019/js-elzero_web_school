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
