/**
 * These four tasks combine everything from Module 13. Each must be solved as a function that returns a value, with an Input/Output/Returns comment on top.
 */

// Input: a number
// Output: true or false
// Returns: a boolean
 
function isPerfectSquare(num) {
  let root = Math.sqrt(num);
  return root * root === num;
  }

 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false
