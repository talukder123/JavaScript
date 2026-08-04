// ES5 — refactor this fully to ES6:
// var calculateTotal = function(items) {
//   var total = 0;
//   for (var i = 0; i < items.length; i++) {
//     total = total + items[i].price;
//   }
//   return 'Total: ' + total + ' Taka';
// };

// ES5 — refactor this fully to ES6:


const calculateTotal = (items) => {
    let money = 0;
    for (const i of items) {
        money += i.price;
    }

    return `Total: ${money} Taka`;
}

console.log(calculateTotal([{price:100},{price:250}]))
console.log(calculateTotal([{price:80}]))