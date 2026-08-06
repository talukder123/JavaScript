/**
 * Task 13-3B: Odd Numbers Up To N
Problem Statement:
Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).

// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
 */

function getOddNumbers(n) {
  let odds = [];
  for (let i=0; i<=n; i++) {
    if (i%2 !== 0) {
        odds.push(i);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]


