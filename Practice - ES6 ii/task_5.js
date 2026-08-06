/*
 * Task 5: getEmployeeDept(employee) — Nested Destructuring 
Given { name, job: { title, department } }, return { title, department } using nested destructuring.
Input:  
{ name: "Nadia", job: { title: "PM", department: "Product" } }
Output: 
{ title: "PM", department: "Product" }

 */

const getEmployeeDept = (employee) => {

    let {name:personName, job:{title:jobTitle, department:jobDepartment}} = employee

    return ` title: "${jobTitle}", department: "${jobDepartment}" `
}

let person = { 
    name: "Nadia", 
    job: {
        title: "PM",
        department: "Product"
    }
}

console.log(getEmployeeDept(person))