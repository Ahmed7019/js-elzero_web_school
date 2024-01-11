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

let myString = "1,2,3,EE,K,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let newString = myString.split("").filter(function (ele) {
  return ele !== "," && isNaN(ele) ? ele : "";
}, 10);
console.log(newString);
