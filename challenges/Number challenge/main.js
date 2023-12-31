// Number challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find the smallest Number in All variables And Return Integer
console.log(Math.min(a,b,c,d)); //Answer is d

// Use variables a + d One time to get the needed output
console.log(Math.pow(a,Math.trunc(d))); // 10000

// Get the integer "2" From d variable with 4 methods
console.log(Math.trunc(b/100));
console.log(Math.floor(b/100));
console.log(Math.trunc(b/a));
console.log(Math.trunc(b/c));

// Use variables b + d To get this values
console.log((((b+d)/3.0432).toFixed(2)).toString()); // 66.67 => String
console.log(Math.trunc(((b+d)/3))); // 67 => Number
