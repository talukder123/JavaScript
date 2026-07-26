/**
 * Write a function listKeys that takes an object and returns an array containing its property names (keys).
 */

// Input: an object
// Output: array of the object's keys
// Returns: an array
 
function listKeys(obj) {
  let keys = [];
  for (let i in obj) {
    keys.push(i);
  }
 
  return keys;
}
 
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]