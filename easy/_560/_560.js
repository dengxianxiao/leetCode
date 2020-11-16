/**
 *
 * Map
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let n = nums.length
  const map = new Map()
  map.set(0, 1)
  let sum = 0
  let count = 0
  for (let num of nums) {
      sum += num
      if (map.has(sum - k)) {
          count += map.get(sum - k)
      }
      if (map.has(sum)) {
          map.set(sum, map.get(sum) + 1)
      } else {
          map.set(sum, 1)
      }
  }
  return count
};
