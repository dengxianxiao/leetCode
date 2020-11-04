/**
 *
 * 贪心算法
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length
  let rightMost = 0
  for (let i = 0; i < n; i ++) {
      if (i <= rightMost) {
          // 实时记录最远到达的位置
          rightMost = Math.max(rightMost, i + nums[i])
          if (rightMost >= n - 1) {
              return true
          }
      }
  }
  return false
};
