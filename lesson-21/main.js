// Task one

let taskOneIp = "2001:db8:3333:4444:5555:6666:7777:8888";

let regExpOne = /\d+.\w+.(\d+|.)+/gi;

console.log(taskOneIp.match(regExpOne));

// Task two

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRegExp = /Os\d*O/gi;

console.log(specialNames.match(specialNamesRegExp));
// Output
// ['Os10O', 'OsO', 'Os100O']
