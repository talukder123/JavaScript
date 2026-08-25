function checkMathOperationsForNine(a, b) {
  let sum = a + b;
  let mul = a * b;
  let quotient = a / b;
  let difference  = a - b

  if ( sum === 9 || mul === 9 || quotient === 9 || difference === 9) {
    return "Nine"
  } else {
    return "Nein"
  }
}