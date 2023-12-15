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

// let start = 10;
// let end = 0;
// let stop = 3;

// for (start; start >= stop; start--) {
//   if (start < 10) {
//     console.log(`${end}${start}`);
//   } else {
//     console.log(start);
//   }
// }
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// Task three

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (start; start <= end; start++) {
//   console.log(start);
//   console.log(`-- ${breaker}`);
//   console.log(`-- ${end - breaker}`);
// }
// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

// Task four

let index = 10;
let jump = 2;
for (;;) {
  // Write Your Code Here
  if (index >= jump * jump) {
    console.log(index);
  }
  index -= jump;
  if (index < jump.toExponential(2)) {
    break;
  }
}

// Output
// 10
// 8
// 6
// 4
