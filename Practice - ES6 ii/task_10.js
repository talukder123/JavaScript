/*
 *Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
Input:  cloneAndUpdate([5, 10, 15], 1, 99)
Output: [5, 99, 15]
(original array still [5, 10, 15]) 
 */

const cloneAndUpdate = (arr, index, newValue) => {
    const [...newArr] = arr

    newArr[index] = newValue

    return newArr
}

let arr = [5, 10, 15]
console.log('Original Array : -->', arr);
console.log('Updated Array : -->', cloneAndUpdate(arr, 1, 99))