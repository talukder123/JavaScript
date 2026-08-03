

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

let findPlayerAgeOf35 = player.find ((i) => i.age === 35)
console.log(findPlayerAgeOf35)