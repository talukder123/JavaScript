
let g = 234;
let h = 10;

console.log(`G = ${g} H = ${h}`); // it is a good practice to have a semicolon before destructuring in JS

[h, g] = [g, h]

console.log(`G = ${g} H = ${h}`)