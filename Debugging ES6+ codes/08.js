const cart = [
    { id: 1, name: "Laptop", price: 80000, quantity: 1 },
    { id: 2, name: "Mouse", price: 1500, quantity: 2 },
    { id: 3, name: "Keyboard", price: 3000, quantity: 1 }
];

const calculateCart = (items) => {
    const subtotal = items.reduce((total, item) => {
         return total + item.price * item.quantity;
    }, 0);

    const discount = subtotal >= 50000 ? subtotal * 0.10 : 0;
    const deliveryCharge = subtotal > 10000 ? 0 : 500;

    const total = subtotal - discount + deliveryCharge;

    return {
        subtotal : subtotal,
        discount : discount,
        deliveryCharge : deliveryCharge,
        total : total
    };
};

console.log(calculateCart(cart));

/*
Expected:

{
    subtotal: 86000,
    discount: 8600,
    deliveryCharge: 0,
    total: 77400
}
*/