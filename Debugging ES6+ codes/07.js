function calculateTotal(price, quantity) {
    let total = price * quantity;

    if (quantity <= 0) {
        return "Invalid quantity";
    }

    return total;
}

console.log(calculateTotal(500, 3));
// Expected: 1500

