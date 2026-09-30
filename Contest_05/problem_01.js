// find the missing num

function missingNumber(nums) {
    const n = nums.length;
    
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
}