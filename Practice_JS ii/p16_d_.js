/**
 * Write a function invertObject that takes an object with unique values and returns a new object where each original value becomes a key, and each original key becomes its value.
 */

// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
 
function invertObject(obj) {
  let inverted = {};

  for (const key in obj) {
    const value = obj[key];
    inverted[value] = key; // Set the original value as the new key, and key as value
  }

  return inverted;
}
 
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }

// @# took the help of Gemini
