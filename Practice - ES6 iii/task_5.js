// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce

// Given an array of products { name, category, price }, 
// -> return the total price of all products, in the given category, after applying a 10% discount to each.


// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144

const getDiscountedTotalForCategory = (products, category) => {

    const total = products.filter((item) => {
        return item.category === category
    }).map((item) => {
        const discountPrice = item.price - (item.price * 0.10)
        return {
            ...item,
            price:  discountPrice
        }
    }).reduce((acc, item) => {
        return acc + item.price
    }, 0)

    return total
}

const products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }]

const category = "stationery"

console.log(getDiscountedTotalForCategory(products, category))