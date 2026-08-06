/**
 * Second Largest Number from
 * let arr = [10, 5, 20, 8, 15];
 */

let arr = [10, 5, 20, 8, 15];

function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i<arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        return "There is no second largest number\n";
    }

    return second;
}

let ans = secondLargest(arr);
console.log(ans);