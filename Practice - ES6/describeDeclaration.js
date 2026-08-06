
const describeDeclaration = (str) => {
    if (str === "var") {
        return "Can redeclare, can reassign"
    } else if (str === "let") {
        return "Cannot redeclare, can reassign"
    } else if (str === "const") {
        return "Cannot redeclare, cannot reassign"
    } else {
        return "Invalid"
    }
}


let a = "var";
let b = "let";
let c = "const";
let d = "float"

console.log(describeDeclaration(a))
console.log(describeDeclaration(b))
console.log(describeDeclaration(c))
console.log(describeDeclaration(d))
