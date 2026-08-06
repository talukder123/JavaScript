/*
 *
 * Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

- Convert the email to lowercase and update the object.
- Loop through the contact object and print each key-value pair.
- Add a new property favoriteWords: [] (an array) — push 3 words to it.
- Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
- Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.

 *
 */

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

let t_mail = contact.email.toLowerCase();
contact.email = t_mail;

for (const i in contact) {
    console.log(i, '-', contact[i]);
}

contact['favoriteWords'] = ['Code', 'Coffe', 'Gym'];
console.log("\nAfter 3 words:", contact)


let string_name = contact.name;

let temp = string_name.split("");
let rev = "";

for (const ch of temp) {
    rev = ch + rev;
}

console.log('\nReversed: ', rev);

if (contact.email.includes("@email.com")) {
    console.log("\nvarified email\n");
} else {
    console.log("\nUn-varified email\n");
}