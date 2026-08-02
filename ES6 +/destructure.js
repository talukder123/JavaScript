
// destructring an array!
let arr = [10, 20, 30, 40, 50];

const [a, b, , , c] = arr;
console.log(a, b, c)
console.log("\n\n")

// destructuring an object!
const student = {
    name : 'talukder',
    roll : 151,
    age : 23,
    marks : {
        dsa : 67,
        math : 88
    }
}

const {name:fullName, marks : {math, dsa}, roll} = student;

console.log(fullName, roll, math, dsa)