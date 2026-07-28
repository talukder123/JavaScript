/**
 * // Apply the full debugging process to find this bug
 
function reverseString(str) {
  let reversed = "";
 
  for (let i = str.length; i > 0; i--) {
    reversed += str[i];
  }
 
  return reversed;
}
 
console.log(reverseString("hello")); // Expected: "olleh"
 */

// Apply the full debugging process to find this bug

function reverseString(str) {
  let reversed = "";

  for (let i = str.length-1; i >= 0; i--) { // solved
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // Expected: "olleh"