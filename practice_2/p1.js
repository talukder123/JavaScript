/**
 * Problem Statement:
Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise."

 */

function weather(temp) {

    if (temp >= 30 ) {
        return "Hot";
    } else if (temp <= 15 ) {
        return "cold";
    } else {
        return "Normal";
    }
}

let temp = 56;

let res = weather(temp);
console.log(res);