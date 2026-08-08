// const prices = [100, 200, 300, 400];

// const discountedPrices = prices.map(price => {
//   price * 0.9;
// });

// console.log(discountedPrices);

// Expected Output:

// [90, 180, 270, 360]

const prices = [100, 200, 300, 400];

const discountedPrices = prices.map((price) => {
  return price * 0.9; // --> return was missing
});

console.log(discountedPrices);