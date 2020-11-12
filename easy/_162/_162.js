/**
 *
 * 二分查找
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] > nums[mid + 1]) {
          right = mid
      } else {
          left = mid + 1
      }
  }
  return left
};

/**
 *
 * 遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
      if (nums[i] > nums[i + 1]) {
          return i
      }
  }
  return len - 1
};
