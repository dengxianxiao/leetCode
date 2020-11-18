/**
 * 排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(logn)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (!nums || nums.length < 3) {
      return
  }
  nums.sort((a, b) => a - b)
  const n = nums.length
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3])
};

/**
 *
 * 找5个数
 *
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let min1 = Number.POSITIVE_INFINITY
  let min2 = Number.POSITIVE_INFINITY
  let max1 = Number.NEGATIVE_INFINITY
  let max2 = Number.NEGATIVE_INFINITY
  let max3 = Number.NEGATIVE_INFINITY
  for (let num of nums) {
      if (num <= min1) {
          min2 = min1
          min1 = num
      } else if (num <= min2) {
          min2 = num
      }

      if (num >= max3) {
          max1 = max2
          max2 = max3
          max3 = num
      } else if (num >= max2) {
          max1 = max2
          max2 = num
      } else if (num >= max1) {
          max1 = num
      }
  }
  return Math.max(min1 * min2 * max3, max1 * max2 * max3)
};
