function calculateOrder(items, discountCode) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }

    if (discountCode === "SAVE10") {
        total -= total * 0.10;
    }

    if (total > 5000) {
        total -= 500;
    }

    return total.toFixed(2);
}

const cart = [
    { name: "Keyboard", price: 2500, quantity: 1 },
    { name: "Mouse", price: 1200, quantity: 2 },
    { name: "Headset", price: 1800, quantity: 1 }
];

console.log(calculateOrder(cart, "INVALID"));