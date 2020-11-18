/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  const n = nums.length
  if (n === 1) {
      return true
  }
  let count = 0
  for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
          // 判断相邻的4个数
          if (i === 0 || nums[i - 1] <= nums[i + 1] || i + 2 > n - 1 || nums[i + 2] >= nums[i]) {
              count++
          } else {
              return false
          }
      }
  }
  return count <= 1
};
