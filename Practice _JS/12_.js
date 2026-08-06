/**
 * let scores = { math: 90, science: 85, art: 95 };
Use a for...in loop to log each key and value like: math: 90.
Calculate the average of all values in the loop.
 */

let scores = {
    math: 90,
    science: 85,
    art: 95
};

let avg = 0;

for (const i in scores) {
    console.log(i,':', scores[i]);
    avg += scores[i];
}

const totalKeys = Object.keys(scores).length;
avg = avg / totalKeys;
console.log("Average = ", avg);