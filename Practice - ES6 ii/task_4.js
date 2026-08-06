/**
 * Task 4: swapValues(a, b) — Destructuring 
Return [b, a] using array destructuring assignment, no temporary variable.
Input:  
swapValues(5, 10)
Output:
 [10, 5]

 */

 const swapValues = (a, b) => {
    [b, a] = [a, b]

    return [a, b]
 }

 let a = 5
 let b = 10

 console.log(swapValues(a, b))