
let str = "Hello, My Name Is Abdus Salam Talukder";

let str_arr = str.split(" ");

let total = 0;
for (const i of str_arr) {
    total++;
}

console.log("total words in str is = ", total);