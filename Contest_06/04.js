function longestIncreasingStreak(nums) {
  if (nums.length === 0) return 0;

  let currentStreak = 1;
  let longestStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}