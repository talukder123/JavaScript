
const player = {
    name : 'Messi',
    age: 39,
    club: 'Inter Miami',
    salary: "14M"
}


// one way
for (const i in player) {
    console.log(i, player[i]);
}

// another way
const keys = Object.keys(player);
const values = Object.values(player);

for (const i of keys) {
    console.log(i, player[i])
}

// another way
const entries = Object.entries(player)

for (const i of entries) {
    const [key, val] = i // destructuring;
    console.log(key, val)
}