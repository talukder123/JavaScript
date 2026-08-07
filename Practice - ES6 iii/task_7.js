// ----> sort by price!

// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
// Input: 
// [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
// Output:
//  [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]

const sortByPriceAscending = (products) => {
    const final = products.sort((a, b) => a.price - b.price); // !!--!!--> very important, we dont need to destrcuture the object, cause a and b represent the object

    return final
}

const product = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }]

console.log(sortByPriceAscending(product))