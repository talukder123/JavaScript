/**
 * Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
 */

function rev(num) {
    return Number(num.toString().split("").reverse().join(""));
}

let num = 1234;
console.log(rev(num));