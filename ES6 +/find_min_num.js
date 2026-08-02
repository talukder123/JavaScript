
function minNum(nums) {
    let min_num = Math.min(...nums); // using speard operator
    return min_num;
}

console.log(minNum([7, 10, 30, 45, 100]))