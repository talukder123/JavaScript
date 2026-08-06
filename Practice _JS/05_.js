/**
 * Use .concat() to join "Hello" and "World" into "Hello World".
Use + and template literals to do the same thing. Compare all three approaches
 */


const word = "";
const first = "Hello";
const second = "World";

const ans = first.concat(" ", second);
console.log('Method 1:', ans);

const res = first + " " + second;
console.log('\nMethod 2:', res);


console.log(`\nMethod 3: ${first}${" "}${second}`);