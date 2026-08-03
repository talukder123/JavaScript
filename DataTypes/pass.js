// primitive and non-primitive

function changeValue(num) {
    num = num * 10;
    return num;
}

let a = 10;
changeValue(a) // here the changeValue returns 100, but not changed in a!

console.log("Pass bu value: ", a)




// Non-primitive -- pass by refference

function changeValueByAddress (num) {
    return num.push(20000000)
}

let arr = [3, 6, 7];
changeValueByAddress(arr);

console.log(arr);