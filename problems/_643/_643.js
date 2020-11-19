/**
 *
 * 求和
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const n = nums.length
  const sumArr = new Array(n).fill(0)
  sumArr[0] = nums[0]
  for (let i = 1; i < n; i++) {
      sumArr[i] = sumArr[i - 1] + nums[i]
  }
  let res = sumArr[k - 1] / k
  for (let i = k; i < n; i++) {
      res = Math.max(res, (sumArr[i] - sumArr[i - k]) / k)
  }
  return res
};

/**
 *
 * 滑动窗口
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < k; i++) {
      sum += nums[i]
  }
  let maxVal = sum
  for (let i = k; i < n; i++) {
      sum = sum + nums[i] - nums[i - k]
      maxVal = Math.max(maxVal, sum)
  }
  return maxVal / k
};
