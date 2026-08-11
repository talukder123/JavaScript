// Problem 3 — Product Price Calculator


// Input:

// {
//     name: "Laptop",
//     price: 50000,
//     quantity: 2
// }

// Rules:

// product object না হলে → "Invalid"
// price বা quantity missing হলে → "Invalid"
// price বা quantity 0 বা negative হলে → "Invalid"
// Total = price × quantity
// Total 100000 বা বেশি হলে 10% discount
// Otherwise কোনো discount নেই।

// Example:

// calculateTotal({
//     name: "Laptop",
//     price: 50000,
//     quantity: 2
// });

// Output:

// 90000

function calculateTotal(product) {
    if (typeof product !== "object") return "Invaild"

    const {name, price, quantity} = product

    if (price === undefined || quantity === undefined || quantity <= 0) {
        return "Invalid"
    }

    let total = price * quantity

    if (total >= 100000) {
        total = total - (total * 0.10)
    }

    return total

}

console.log(
    calculateTotal({
    name: "Laptop",
    price: 50000,
    quantity: 2
})
);

