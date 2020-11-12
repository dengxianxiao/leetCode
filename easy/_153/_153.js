/**
 *
 * 二分查找
 * 时间复杂度O(logn)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] > nums[j]) {
          // 左边递增
          i = mid + 1
      } else {
          // 右边递增
          j = mid
      }
  }
  return nums[i]
};

/**
 * 二分查找
 * 时间复杂度O(logn)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let minVal = nums[0]
  let i = 0
  let j = nums.length
  while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] >= nums[0]) {
          // 左边递增，最小值要么是nums[i]，要么在右边
          if (nums[i] < minVal) {
              minVal = nums[i]
          }
          i = mid + 1
      } else {
          // 右边递增，最小值要么是nums[mid]，要么在左边
          if (nums[mid] < minVal) {
              minVal = nums[mid]
          }
          j = mid - 1
      }
  }
  return minVal
};
