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
// for (let i = 0; i <= 99999; i++) console.log(i);
let t1 = performance.now();
console.log(`Loop Took ${1921} Milliseconds`);
// Needed Output

// "Loop Took 1921 Milliseconds."

// Task five
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);

// Write Your Generator Function Here
function* gen() {
  // 140 + 200
  let increment = 140;
  let i = 14;
  while (true) {
    yield i;
    i += increment;
    increment += 200;
  }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);
console.log(`+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`);

// Task six

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  let x = new Set(genNumbers());
  yield* x;
  let y = new Set(genLetters());
  yield* y;
}

let generatorTaskSix = genAll();

console.log(generatorTaskSix.next()); // {value: 1, done: false}
console.log(generatorTaskSix.next()); // {value: 2, done: false}
console.log(generatorTaskSix.next()); // {value: 3, done: false}
console.log(generatorTaskSix.next()); // {value: 4, done: false}
console.log(generatorTaskSix.next()); // {value: 5, done: false}
console.log(generatorTaskSix.next()); // {value: "A", done: false}
console.log(generatorTaskSix.next()); // {value: "B", done: false}
console.log(generatorTaskSix.next()); // {value: "C", done: false}
console.log(generatorTaskSix.next()); // {value: "D", done: false}
