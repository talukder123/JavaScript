/**
 * // Bug type: ___
function sayHi(name) {
  console.log("Hi, " + name)
}
sayHi("Mira");
 
// Bug type: ___
let word = "hello";
console.log(word.toUppercase());
 
// Bug type: ___
function square(num) {
  return num + num;
}
console.log(square(4));

 */

// Bug type: No bug
function sayHi(name) {
  console.log("Hi, " + name)
}
sayHi("Mira");
 
// Bug type: systax
let word = "hello";
console.log(word.toUpperCase());
 
// Bug type: logical
function square(num) {
  return num * num;
}
console.log(square(4));
