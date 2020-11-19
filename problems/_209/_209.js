/**
 *
 * 双指针
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let minLen = Number.POSITIVE_INFINITY
  let i = 0
  let j = 0
  let len = nums.length
  let sum = 0
  while (j < len) {
      sum += nums[j]
      while (sum >= s) {
          minLen = Math.min(minLen, j - i + 1)
          sum -= nums[i]
          i++
      }
      j++
  }
  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
};

/**
 * 暴力法
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let minLen = Number.POSITIVE_INFINITY
  const len = nums.length
  for (let i = 0; i < len; i++) {
      let sum = 0
      for (let j = i; j < len; j++) {
          sum += nums[j]
          if (sum >= s) {
              minLen = Math.min(minLen, j - i + 1)
              break
          }
      }
  }
  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
};
