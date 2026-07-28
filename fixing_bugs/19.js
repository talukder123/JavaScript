/**
 * // Apply the full debugging process to find this bug
 
function createCounters() {
  let counters = [];
 
  for (var i = 1; i <= 3; i++) {
    counters.push(function() {
      return i;
    });
  }
 
  return counters;
}
 
let myCounters = createCounters();
console.log(myCounters[0]()); // Expected: 1
console.log(myCounters[1]()); // Expected: 2
console.log(myCounters[2]()); // Expected: 3
 */

// Apply the full debugging process to find this bug

function createCounters() {
  let counters = [];

  for (let i = 1; i <= 3; i++) { // solved!
    counters.push(function() {
      return i;
    });
  }

  return counters;
}

let myCounters = createCounters();
console.log(myCounters[0]()); // Expected: 1
console.log(myCounters[1]()); // Expected: 2
console.log(myCounters[2]()); // Expected: 3