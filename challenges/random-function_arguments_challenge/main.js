/**
 * Function - Random Argument Challenge
 * ====================================
 * Create Function showDetails
 * Function Accept 3 Parameters [a, b, c]
 * Date Types For Info Is
 * - Strring => Name
 * - Number => Age
 * - Boolean => Status
 * Argument Is Random
 * Data Is Not Sorted Output Depend On Data Types
 * - Use Ternary Conditional Operator
 */

function showDetails(a, b, c) {
  // Variables
  let name = "",
    age = 0,
    status = true;
  // Check for the a parameter and do the same for both b & c
  typeof a === typeof name
    ? (name = a)
    : typeof a === typeof age
    ? (age = a)
    : (status = a);
  // Check b parameter
  typeof b === typeof name
    ? (name = b)
    : typeof b === typeof age
    ? (age = b)
    : (status = b);
  // Check c parameter
  typeof c === typeof name
    ? (name = c)
    : typeof c === typeof age
    ? (age = c)
    : (status = c);
}

showDetails("Osama", 38, true); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(38, "Osama", true); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(true, 38, "Osama"); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(false, "Osama", 38); // "Hello Osama", Your Age Is 38, You Are Available For Hire
