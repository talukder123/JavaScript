/**
 * Write a function averageOfArray that takes an array of numbers and returns their average.
 */

// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;
  let count = numbers.length;
  for (const i of numbers) {
    total += i;
  }

  total = total / count;
 
  return total;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4