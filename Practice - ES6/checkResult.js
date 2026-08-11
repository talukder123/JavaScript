// {
//     name: "Rahim",
//     marks: 75
// }

// Rules:

// student object না হলে → "Invalid"
// name বা marks missing হলে → "Invalid"
// marks 0-100 এর বাইরে হলে → "Invalid"
// marks 40 বা তার বেশি হলে →
// "Rahim has passed."
// otherwise →
// "Rahim has failed."



function checkResult(student) {
    if (typeof student !== "object") return "Invalid"

    const {name, marks} = student

    if (name === undefined || marks === undefined || marks < 0 || marks > 100) {
        return "Invalid"
    }

    return (marks >= 40) ? "Rahim has passed." : "Rahim has failed."
}

const student = {
    name: "Rahim",
    marks: 75
}

console.log(checkResult(student))