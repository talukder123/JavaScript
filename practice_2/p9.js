/**
 * 
 * Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
 */

// Input: an array of numbers
// Output: the second smallest number
// Returns: a number
 
function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] < smallest) {
        secondSmallest = smallest;
        smallest = numbers[i];
    } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
      secondSmallest = numbers[i];
    }
  }
 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
