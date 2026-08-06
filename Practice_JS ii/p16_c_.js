/**
 *  Write a function removeDuplicates that takes an array of numbers and returns a new array where each value appears only once, keeping the first occurrence.
 */

// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array
 
function removeDuplicates(numbers) {
  let unique = [];
  for (const i of numbers) {
    let num = i;
    if (unique.includes(i)) {
        continue;
    } else {
        unique.push(i);
    }
  }
 
  return unique;
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
