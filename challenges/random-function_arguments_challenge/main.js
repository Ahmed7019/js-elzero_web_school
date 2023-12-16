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

// Variables

let name = "",
  age = 0,
  status = true;

function showDetails(a, b, c) {}

showDetails("Osama", 38, true); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(38, "Osama", true); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(true, 38, "Osama"); // "Hello Osama", Your Age Is 38, You Are Available For Hire
showDetails(false, "Osama", 38); // "Hello Osama", Your Age Is 38, You Are Available For Hire
