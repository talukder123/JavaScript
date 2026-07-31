/**
 * 
 * Write a function that counts the number of uppercase letters in a string.
 */

function countUpperCase(str) {
    let ans = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            ans ++;
        }
    }

    return ans;
}

console.log(countUpperCase("bAnGLadEsH"))