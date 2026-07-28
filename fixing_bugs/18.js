/**
 * // Apply the full debugging process to find this bug
 
function isPalindrome(str) {
  let cleaned = str.toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
 
  return cleaned = reversed;
}
 
console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello"));   // Expected: false
 */

// Apply the full debugging process to find this bug

function isPalindrome(str) {
  let cleaned = str.toLowerCase();
  let reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed; // solved!
}

console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello"));   // Expected: false