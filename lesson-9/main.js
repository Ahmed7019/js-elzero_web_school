// Task one

let start = 10;
let end = 100;
let exclude = 40;

for (start; start <= end; start += 10) {
  if (start === 40) continue;
  console.log(start);
}
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
