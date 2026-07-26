/**
 * // Bug: find why score = 50 doesn't return "Pass"
 
function checkScore(score) {
  if (score > 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"

 */
 
function checkScore(score) {
  if (score >= 50) { // it is just missing ">="
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
