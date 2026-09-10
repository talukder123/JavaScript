// Given a string, reverse each word in the string while maintaining the original order of words and spaces.


function reverseEachWord(str) {
    const newArray = str.split(" ");

    const ansArr = newArray.map(word => {
        return word.split("").reverse().join("");
    });

    return ansArr.join(" ");
}



