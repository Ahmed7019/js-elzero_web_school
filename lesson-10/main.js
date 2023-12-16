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
  if (typeof friends[counter] === typeof index) {
    for (let i = 0; i < friends.indexOf("Sayed"); i++)
      number.push(friends[counter]);
    counter++;
  } else if (
    friends[counter][index] === "S" ||
    friends[counter][index] === "M"
  ) {
    for (let i = 0; i < friends.indexOf("Sayed"); i++)
      console.log(
        `${number[i] + friends.indexOf("Sayed")} => ${friends[counter]}`
      );
    counter++;
  } else {
    counter++;
    continue;
  }
}
console.log(number);
// Output
// ("1 => Sayed");
// ("2 => Mahmoud");
