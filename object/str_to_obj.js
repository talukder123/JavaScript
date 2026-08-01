// Write a function countCharacters(str) that returns an object containing the frequency of each character in the string.

function countCharacters(str) {
    let count = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    return count;
}

console.log(countCharacters("Bangladesh"))