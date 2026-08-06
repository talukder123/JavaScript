/**
 * Task 2: buildProfileCard(user) — Template Literals 
Given { name, title, company }, return a multiline string using template literal interpolation only.

Input:  
{ name: "Arif", title: "Developer", company: "Programming Hero" }
Output: 
"Arif\nDeveloper at Programming Hero"

 */

const buildProfileCard = (user) => {
    const {name, title, company} = user
    let str = `"${name}\n${title} at ${company}"`
    return str;
}

let person = {
    name: "Arif",
    title: "Developer",
    company: "Programming Hero"
}

console.log(buildProfileCard(person))