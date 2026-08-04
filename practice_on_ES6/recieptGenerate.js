// using template literal!

const  generateReceipt = (customerName, items, total) => {
    if (!Array.isArray(items) || items.length === 0) {
        return "Invalid"
    }

    return `Receipt for 
     ${customerName}
     Items: ${items} 
     Total: ৳${total}`



}
let list = ["beef", "honey", "milk"]
console.log(generateReceipt("Haaland", list, 3170))