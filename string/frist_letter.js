//**
// Return the string with only the first letter capitalized.
//  */

function firstLetter(str) {
    let temp = str;
    temp = temp[0].toUpperCase() + str.slice(1);

    return temp;
}

console.log(firstLetter("javascript"));