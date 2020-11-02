/**
 *
 * 二分查找
 * 时间复杂度O(logn)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let i = 0
  let j = nums.length - 1
  const result = [-1, -1]
  // 找到左边第一个
  while (i < j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] < target) {
          i = mid + 1
      } else {
          j = mid
      }
  }
  if (nums[i] !== target) {
      return result
  }
  result[0] = i

  // 找到右边最后一个
  j = nums.length - 1
  while (i < j) {
      // +1 避免与上一个循环重复
      const mid = Math.floor((i + j) / 2) + 1
      if (nums[mid] > target) {
          j = mid - 1
      } else {
          i = mid
      }
  }
  result[1] = j
  return result
};
