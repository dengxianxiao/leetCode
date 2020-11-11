/**
 *
 * 动态规划
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || !nums.length) {
      return
  }
  // 有负数的场景，存当前值的最大值和最小值
  let maxVal = nums[0]
  let minVal = nums[0]
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {
      const mx = maxVal
      maxVal = Math.max(nums[i], Math.max(maxVal * nums[i], minVal * nums[i]))
      minVal = Math.min(nums[i], Math.min(mx * nums[i], minVal * nums[i]))
      ans = Math.max(maxVal, ans)
  }
  return ans
};
