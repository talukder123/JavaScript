// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]


const getFormattedPrices = (prices) => {
    const newArr = prices.map((item) => {
        return "$"+item
    })

    return newArr
}

const arr = [100, 250, 75]
console.log(getFormattedPrices(arr))