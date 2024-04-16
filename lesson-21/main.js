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

// Task three

let phone = "+(995)-123 (4567)";

let phoneRegExp = /(\D+|\d+|\s)+/gi;

console.log(phone.match(phoneRegExp));

// Task four

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/**
 * https? => It may start with https or not
 * : => match ":"
 * \/\/ => match the double back slash
 * ? => Something might be here or not
 * : => match this sign
 * [-\w]+ => Add the sign - then follow it up with character / number anything (It could be one or more character)
 * \. => match any character except new line or other line terminator
 * \w+ => match any word character (one or more)
 * (?:\.\w+)? => match a (? zero or none ) "the sign :" non line terminators + word characters ) all these may exist or not
 * \ => escape character
 * /? => match a question mark
 * .* => non line terminators (May exist for once or not at all)
 *  i => (Modifier) Case insensitive matching
 */
