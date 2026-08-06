/**
 * Task 7: sumAllPrices(prices) — for...of 
Given an array of numbers, return their sum using for...of.
Input:  [100, 250, 75]
Output: 425

 */

let prices = [100, 250, 75]

const sumAllPrices = (prices) => {
    let sum = 0;
    for (const i of prices) {
        sum += i;
    }

    return sum;
}

console.log(sumAllPrices(prices))