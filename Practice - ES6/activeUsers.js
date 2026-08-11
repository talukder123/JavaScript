// 🟡 Problem 2 — Active User Filter


// Input:

// [
//     { name: "Rahim", active: true },
//     { name: "Karim", active: false },
//     { name: "Sakib", active: true }
// ]

// Rules:

// users array না হলে → []
// শুধু যাদের active === true, তাদের name return করবে।
// Expected output:
// ["Rahim", "Sakib"]

function getActiveUsers(users) {

    if (!Array.isArray(users)) return []

    const newArr = users.filter((person) => {
        return person.active === true
    })

    return newArr

}

console.log(getActiveUsers(
    [
    { name: "Rahim", active: true },
    { name: "Karim", active: false },
    { name: "Sakib", active: true }
]
))