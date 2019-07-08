/**
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

 */

/**
 * 遍历判断每个值的数量
 * 时间复杂度O(n)
 * 空间复杂度(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) {
      return nums[0]
  }
  let map = new Map()
  let harfLen = Math.floor(nums.length / 2)
  let maxLen = 0
  for (let i = 0, l = nums.length; i < l; i++) {
      if (map.has(nums[i])) {
          let currentValueLength = map.get(nums[i])
          if (++currentValueLength > harfLen) {
              return nums[i]
          }
          if (currentValueLength > maxLen) {
              maxLen = currentValueLength
          }
          map.set(nums[i], currentValueLength)
      } else {
          map.set(nums[i], 1)
      }
  }
  return maxLen
};

/**
 * 排序后，直接取中间的值即可
 * 众数的数量一定大于 len/2，所以中间的一定是众数
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)或o(n)，取决于排序算法
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

/**
 * 投票算法，当前数是众数为1，不是众数为-1，
 * 因为众数超过一半，不是众数一定会被中和掉
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0
  let candidate
  for (let i = 0, l = nums.length; i < l; i++) {
      if (count === 0) {
          candidate = nums[i]
      }
      count += (candidate === nums[i])
          ? 1
          : -1
  }
  return candidate
};
