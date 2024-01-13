// Task one

// Extract letters only using map + reduce only !

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixLetters = mix.map(function(ele){
    return !isNaN(ele);
},10).reduce(function(acc,current){
    return `${acc}${current}`
});
// Elzero