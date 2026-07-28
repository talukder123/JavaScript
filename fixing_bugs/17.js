/**
 * // Apply the full debugging process to find this bug
 
function findMax(arr) {
  let max = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
 
  return max;
}
 
console.log(findMax([-5, -2, -9, -1])); // Expected: -1
 */

// Apply the full debugging process to find this bug

function findMax(arr) {
  let max = -Infinity; // fixed bug!

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([-5, -2, -9, -1])); // Expected: -1