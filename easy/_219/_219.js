/**
 * 219. 存在重复元素 II
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
 */

/**
 * 用Set存储最多k个数
 * 时间复杂度：O(n)
 * 空间复杂度：O(min(n,k))
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k <= 0 || !nums) {
      return false
  }
  let set = new Set()
  for (let i = 0, l = nums.length; i < l; i++) {
      if (set.has(nums[i])) {
          return true
      }
      set.add(nums[i])
      if (set.size > k) {
        set.delete(nums[i - k])
      }
  }
  return false
};

/**
 * 用map存储每个数的索引
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k <= 0 || !nums) {
      return false
  }
  let map = new Map()
  for (let i = 0, l = nums.length; i < l; i++) {
      if (map.has(nums[i])) {
          if (map.get(nums[i]).find(j => i - j <= k) >= 0) return true
          map.get(nums[i]).push(i)
      } else {
          map.set(nums[i], [i])
      }
  }
  return false
};

/**
 * 维持一个k大小移动滑块，判断里面是否有相等的值
 * 时间复杂度: O(nmin(k,n)) 最慢
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k <= 0 || !nums) {
      return false
  }
  for (let i = 0, l = nums.length; i < l; i++) {
    for (let j = Math.max(i - k, 0); j < i; j++) {
      if (nums[i] === nums[j]) return true
    }
  }
  return false
};
