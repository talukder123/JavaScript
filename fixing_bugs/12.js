/**
 * function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 3; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32

 */

function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32; // find the bug 3 was instead of 32
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32
