// While loop assignment

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let number = [];
// while (counter < friends.length) {
//   if (friends[counter][index] === "A") {
//     counter++;
//     continue;
//   } else if (typeof friends[counter] === typeof index) {

//     counter++;
//   } else {
//     console.log(`${number[index]} => ${friends[counter]}`);
//     counter++;
//   }
while (counter < friends.length) {
  /*if (typeof friends[counter] === typeof index) {
    // Adds the numbers (1 ,2) to number array
    number.push(friends[counter]);
    counter++;
  }*/
  if (friends[counter][index] === "S" || friends[counter][index] === "M") {
    let i = index;
    if (friends[counter][index] === "M") i = friends.indexOf("Sayed");
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
