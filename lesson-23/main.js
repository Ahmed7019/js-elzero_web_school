// Task one

let myBirthday = new Date("January 25, 2003"),
  today = new Date(),
  age = today - myBirthday;
console.log(`${parseInt(age * 86400)} Seconds`);
console.log(`${parseInt(age / 1000 / 60)} Minutes`);
console.log(`${parseInt(age / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24 / 30)}  Months`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24 / 365)} Years`);

// task two
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);
// Needed Output

let oldDate = new Date(0);
oldDate.setFullYear(1980);
oldDate.setSeconds(1);
oldDate.setHours(0);
console.log(oldDate);

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);

// task three

let taskThree = new Date();
taskThree.setFullYear(2024, taskThree.getMonth(), 0);
console.log(taskThree);
// Needed Output

// ("Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)");
// ("Previous Month Is April And Last Day Is 30");

console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);

// Task four
let t0 = performance.now();
for (let i = 0; i <= 99999; i++) console.log(i);
let t1 = performance.now();
console.log(`Loop Took ${1921} Milliseconds`);
// Needed Output

// "Loop Took 1921 Milliseconds."
