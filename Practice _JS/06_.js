/**
 * Write a function reverseString(str) three different ways:
Using .split(""), .reverse(), and .join("")
Using a for loop that builds the reversed string character by character


Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why?

 */

const str = "JavaScript";

// 01
let arr = str.split("");
let res = "";

for (const i of arr) {
    res = i + res;
}
console.log(res);

//02
let res2 = arr.reverse();
let ans = res2.join("");
console.log(ans);

//03 - using for loop
let rev = "";
for (let i = str.length-1; i>=0; i--) {
rev = rev + str[i];
}
console.log('using for:', rev);