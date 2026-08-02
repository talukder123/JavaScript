// basically rest operator used to access all the elemnt of array where we dont even know the length of that array. 

function useRestOperator(a, b, c, ...restNums) {
    let sum = 0;
    for (let i of restNums) {
        sum+= i;
    }

    return a + b + c + sum;
}

let ans = useRestOperator(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
console.log(ans)