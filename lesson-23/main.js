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

// Needed Output

let oldDate = new Date(0);
oldDate.setFullYear(1980);
oldDate.setSeconds(1);
oldDate.setHours(0);
console.log(oldDate);

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
