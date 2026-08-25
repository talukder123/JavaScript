function shoppingSpree(totalMoney, cakeCost, donutCost) {


    const afterCake = totalMoney - cakeCost;

    if (afterCake < donutCost) return afterCake;


    const donuts = Math.floor(afterCake / donutCost);

    
    return afterCake - donuts * donutCost;
}