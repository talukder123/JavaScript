// const calculateScores = (users) => {
//     return users
//         .filter(user => user.score >= "50")
//         .map(user => {
//             const { name, score } = user;

//             return `${Name}: ${score + 10}`;
//         });
// };

// const users = [
//     { name: "Rahim", score: 60 },
//     { name: "Karim", score: 45 },
//     { name: "Hasan", score: 75 }
// ];

// console.log(calculateScores(users));

// Expected Output:

// [
//   "Rahim: 70",
//   "Hasan: 85"
// ]

const calculateScores = (users) => {
    return users
        .filter(user => user.score >= "50")
        .map(user => {
            const { name, score } = user;

            return `${name}: ${score + 10}`;
        });
};

const users = [
    { name: "Rahim", score: 60 },
    { name: "Karim", score: 45 },
    { name: "Hasan", score: 75 }
];

console.log(calculateScores(users));