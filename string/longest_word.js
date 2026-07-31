// Return the longest word in a sentence.

function longestWord(str) {

    let ans = "";
    let temp = str;

    arr = temp.split(" ");

    for (const i of arr) {
        if (i.length >= ans.length) {
            ans = i;
        }
    }

    return ans;
}

console.log(longestWord("I love Javascript"));