// const calculateDiscount = (products, discount) => {
//     const updatedProducts = products.map(product => {
//         const { name, price } = product;

//         return {
//             ...product,
//             price: price - price * discount
//         };
//     });

//     return updatedProducts.filter(({ price }) => price > "1000")
//         .map(product => `${product.Name}: ${product.price}`);
// };

// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "USB Cable", price: 500 }
// ];

// console.log(calculateDiscount(products, 0.10));

// Expected Output:

// [
//   "Laptop: 72000",
//   "Mouse: 1350",
//   "Keyboard: 2700"
// ]




const calculateDiscount = (products, discount) => {
    const updatedProducts = products.map(product => {
        const { name, price } = product;

        return {
            ...product,
            price: price - price * discount
        };
    });

    return updatedProducts.filter(( item ) => item.price > 1000) // --> error was there
        ?.map(product => `${product.name}: ${product.price}`);
};

const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "USB Cable", price: 500 }
];

console.log(calculateDiscount(products, 0.10));