

function template_string(name = "student", payment) {
    return `Dear ${name},
            You have to play ${payment} for the current semester
            Thank you!`; // template string!
}

console.log(template_string("Talukder", 71200));