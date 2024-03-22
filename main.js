// Task one

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

// let [a, b, c, d, e] = myNumbers;

// console.log(a * e); // 5

// Task two

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here

let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
