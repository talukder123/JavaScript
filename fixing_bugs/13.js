/**
 * function sumArray(numbers) {
  let total = 0;
 
  for (let i = 1; i < numbers.length; i++) { // find the bug
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10

 */

function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // find the bug // was start from 1 instead of 0
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10
