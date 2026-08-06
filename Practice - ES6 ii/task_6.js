/**
 * Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
Input:  
promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
Output: 
{ name: "Rafi", title: "Senior Dev" }
(original object still has title: "Junior Dev")

 */

const promoteEmployee = (employee, newTitle) => {

    const {name, title} = employee

    return {
        name: name,
        title: newTitle
    };

}

let employee = {
    name: "Rafi",
    title: "Junior Dev"
}

const newTitle = "Senior Dev"

console.log(promoteEmployee(employee, newTitle), "NewTitle")
console.log(employee, "oldTitle")