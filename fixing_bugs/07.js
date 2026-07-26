/**
 * // Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[1]; // find the bug
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)

 */

// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[0]; // it was arr[1] instead of arr[0]
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)
