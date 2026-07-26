/**
 * function updateAge(person, newAge) {
  person.age = person; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }

 */

function updateAge(person, newAge) {
  person.age = newAge; // find the bug // was assigning person, instead of newAge!
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }
