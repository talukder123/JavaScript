let arr = [10, 20, 30, 40, 50, 1232134, 60, 70, 80, 90];

let n = arr.length;
let largest = arr[0];

for (let i=0; i<n-1; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("The largest num is: ", largest);