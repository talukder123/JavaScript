
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([2, 4, 5, 6, 2, 3, 5]));
