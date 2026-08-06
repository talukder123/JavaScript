/**
 * let sentence = "Learning JavaScript is fun!";
Get just the word "Learning" using .slice().
Get the last 4 characters ("fun!") using .slice() with a negative index.

 */

let sentence = "Learning JavaScript is fun!";

const first = sentence.slice(0, 8);
console.log(first);

const second = sentence.slice(-4);
console.log(second);