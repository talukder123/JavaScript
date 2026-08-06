/**
 * Task 8: getManagerName(employee) — Optional Chaining 
Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
Input:  { name: "Mim", manager: { name: "Tanvir" } }
Output: "Tanvir"

Input:  { name: "Rafi" }
Output: undefined
 */

const getManagerName = (employee) => {
    return employee?.manager?.name
}

let emp1 = { name: "Mim", manager: { name: "Tanvir" } }
let emp2 = { name: "Rafi" }

console.log(getManagerName(emp1))
console.log(getManagerName(emp2))