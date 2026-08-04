
const mergeInventory = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2]
    return newArr;
}

const highestScore = (scores) => {
    return Math.max(...scores)
}

let a = [1, 2]
let b = [5, 6, 3, 34, 5]

let scores = [98, 94, 85, 79];

console.log(mergeInventory(a, b));
console.log(highestScore(scores));