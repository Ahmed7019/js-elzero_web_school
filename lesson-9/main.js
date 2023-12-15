// Task one

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (start; start <= end; start += 10) {
//   if (start === 40) continue;
//   console.log(start);
// }
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// Task two

let start = 10;
let end = 0;
let stop = 3;

for (start; start >= stop; start--) {
  if (start < 10) {
    console.log(`${end}${start}`);
  } else {
    console.log(start);
  }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
