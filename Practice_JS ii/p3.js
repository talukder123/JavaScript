/**
 * Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
 * 
 * // Input: a number
// Output: product of its digits
// Returns: a number
 
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  // TODO: loop through each character, convert to number, and multiply
 
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0

 */


function productOfDigits(num) {
  let str = num.toString();
  let total = 1;

  for (const i of str) {
    total = total * i;
  }
 
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0