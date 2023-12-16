// While loop assignment

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let number = [];

// Here add the numbers to the array called number
for (let i = index; i < friends.length; i++) {
  if (typeof friends[i] === typeof index) {
    number.push(friends[i]);
  }
}

while (counter < friends.length) {
  if (friends[counter][index] === "S" || friends[counter][index] === "M") { // Check for the first letter of the element
    let i = index;
    if (friends[counter][index] === "M") i = friends.indexOf("Sayed"); // let i = 1
    console.log(`${number[i]} => ${friends[counter]}`);
    counter++;
  } else {
    counter++;
    continue;
  }
}
// Output
// ("1 => Sayed");
// ("2 => Mahmoud");
