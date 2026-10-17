function calculateCartTotal(items, taxRate) {
  let subtotal = 0;

  items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    const discountedTotal = itemTotal * (1 - item.discount / 100);

    subtotal += discountedTotal;
  });

  const total = subtotal * (1 + taxRate / 100);

  return Number(total.toFixed(2));
}