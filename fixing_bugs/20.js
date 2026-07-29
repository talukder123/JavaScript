function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) { // Bug 1
        if (arr[i] > largest) {             // Bug 2
            largest = arr[i];
        }
    }

    return largest;                     // Bug 3
}

console.log(findLargest([10, 45, 23, 99, 56])); // Expected: 99