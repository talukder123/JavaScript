
function count_vowel(str) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        let letter = str[i].toLowerCase();

        if (vowel.includes(letter)) {
            console.log(letter, "is vowel");
            count ++;
        }
    }

    return count;
}

const vowel = "aeiou";
let str = "Abdus Salam Talukder";

let total = count_vowel(str);
console.log("total vowel is: ", total);