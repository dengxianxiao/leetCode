/**
 *
 * 二分查找
 * 时间复杂度O(n)
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
      } else if (nums[mid] < nums[j]) {
          // 右边递增
          j = mid
      } else {
          // 相等时跳过
          j--
      }
  }
  return nums[i]
};
