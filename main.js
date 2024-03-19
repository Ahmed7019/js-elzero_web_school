// Task one

let numberRange = prompt("Print number From - To", "Example: 5-20");
let arr = numberRange.split(" ");
let less = 0;
let higher = 0;

arr.forEach((num) => {
  parseInt(num);
  +num;
  if (num === "-") {
    num = "";
  } else if (num < arr[2]) {
    less = parseInt(arr[0]);
    higher = parseInt(arr[2]);
  } else if (num > arr[2]) {
    less = parseInt(arr[2]);
    higher = parseInt(num);
  }
});

while (less <= higher) {
  console.log(less);
  less++;
}
