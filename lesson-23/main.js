// Task one

let myBirthday = new Date("January 25, 2003"),
  today = new Date(),
  age =  today - myBirthday;
console.log(`${parseInt(age * 86400)} Seconds`);
console.log(`${parseInt(age / 1000 / 60)} Minutes`);
console.log(`${parseInt(age / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24 / 30)}  Months`);
console.log(`${parseInt(age / 1000 / 60 / 60 / 24 / 365)} Years`);
