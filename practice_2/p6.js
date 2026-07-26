/**
 * Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
 */

// Input: a string
// Output: the string without its first and last character
// Returns: a string
 
function removeFirstAndLast(str) {
  let newStr = str.slice(1, -1);

  return newStr;
 
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"