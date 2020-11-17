/**
 *
 * 标记法
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  let maxLen = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== -1) {
          let start = nums[i]
          let count = 0
          while (nums[start] !== -1) {
              let k = start
              start = nums[start]
              count++
              nums[k] = -1 // 已访问过的做标记
          }
          maxLen = Math.max(maxLen, count)
      }
  }
  return maxLen
};
