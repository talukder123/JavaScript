// const calculateCart = (cart) => {
//     const discountedCart = cart.map(item => {
//         const { name, price, quantity } = item;

//         return {
//             ...item,
//             total: price * quantity
//         };
//     });

//     const total = discountedCart.reduce((sum, item) => {
//         sum + item.total;
//     }, 0);

//     const expensiveItems = discountedCart
//         .filter(({ total }) => total >= "5000")
//         .map(({ Name, total }) => `${Name}: ${total}`);

//     return {
//         items: expensiveItems,
//         total
//     };
// };

// const cart = [
//     { name: "Laptop", price: 80000, quantity: 1 },
//     { name: "Mouse", price: 1500, quantity: 2 },
//     { name: "Keyboard", price: 3000, quantity: 2 }
// ];

// console.log(calculateCart(cart));

// Expected Output:

// {
//     items: [
//         "Laptop: 80000",
//         "Keyboard: 6000"
//     ],
//     total: 89000
// }


const calculateCart = (cart) => {
    const discountedCart = cart.map((item) => {
        const { name, price, quantity } = item;

        return {
            ...item,
            total: price * quantity
        };
    });

    const total = discountedCart.reduce((sum, item) => {
       return  sum + item.total;
    }, 0);

    const expensiveItems = discountedCart
        .filter(({total}) => total >= 5000)
        .map(({ name, total }) => `${name}: ${total}`);

    return {
        expensiveItems,
        total
    };
};

const cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 2 }
];

console.log(calculateCart(cart));