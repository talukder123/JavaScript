/**
 * // Bug: find why the result comes out negative
 
function subtract(a, b) {
  return b - a; // find the bug
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

 */

// Bug: find why the result comes out negative
 
function subtract(a, b) {
  return a - b; // find the bug // it was b - a
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)
