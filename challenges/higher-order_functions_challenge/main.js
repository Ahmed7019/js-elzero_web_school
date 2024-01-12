/**
 * Higher Order Functions Challenge
 *
 * You Can USe
 * - ,
 * - _
 * - Space
 * - True => 1 => One Time Only In The Code
 *
 * You Cannot Use
 * - Numbers
 * - Letters
 *
 * - You Must Use [Filter + Map + Reduce + Your Knowledge]
 * - Order Is Not Important
 * - All In One Chain
 *
 */

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter(function (ele) {
    // Used filter to delete any ',' & number
    return ele !== "," && isNaN(ele) ? ele : "";
  }, 10)
  .map(function (ele) {
    // Used map to exchange underscore with white space
    return ele === "_" ? " " : ele;
  }).reduce(function (acc , current){
     return `${acc}${current}`
  }).slice(true);

console.log(solution);
