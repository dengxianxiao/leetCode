/**
 *
 * 二分查找
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] === target) {
          return true
      }
      if (nums[mid] === nums[i]) {
          i++
          continue
      }
      if (nums[mid] > nums[0]) {
          // 左边是递增的
          if (nums[i] <= target && target < nums[mid]) {
              j = mid - 1
          } else {
              i = mid + 1
          }
      } else {
          // 右边是递增的
          if (nums[mid] < target && target <= nums[j]) {
              i = mid + 1
          } else {
              j = mid - 1
          }
      }
  }
  return false
};
