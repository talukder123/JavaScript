// help version -- chatGPT


// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
// Given an array of orders { product, unitsSold }, 
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

// Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
// Output: "Pen"


const getTopSellingProduct = (orders) => {
    const totals = orders.reduce((acc, item) => {
        if (acc[item.product]) {
            acc[item.product] += item.unitsSold;
        } else {
            acc[item.product] = item.unitsSold;
        }

        return acc;
    }, {});

    const topProduct = Object.entries(totals).reduce((top, current) => {
        return current[1] > top[1] ? current : top;
    });

    return topProduct[0];
};

const orders = [
    { product: "Pen", unitsSold: 30 },
    { product: "Bag", unitsSold: 12 },
    { product: "Pen", unitsSold: 25 }
];

console.log(getTopSellingProduct(orders));