const player = [
    {
        name : "Messi",
        age : 39,
        isWin : true,
        assest : 80000
    },
    {
        name : "Ronaldo",
        age : 41,
        isWin : false,
        assest : 50000
    },
    {
        name : "Neymar",
        age : 35,
        isWin : false,
        assest : 45000
    }
]

// print the richest player with filter method
let richestPlayerwithDetails = player.filter((teka) => {
    return teka.assest >= 50000;
})

console.log(richestPlayerwithDetails)