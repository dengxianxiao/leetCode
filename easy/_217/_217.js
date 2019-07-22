/**
 * 217. 存在重复元素
 *
 * 给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

 */

/**
 * 排序后比较
 * 排序的复杂度是 O(nlogn)，扫描的复杂度是 O(n)。整个算法主要由排序过程决定，因此是 O(nlogn)
 * 空间复杂度 : O(1)。 这取决于具体的排序算法实现，通常而言，使用 堆排序 的话，是 O(1)。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1, l = nums.length; i < l; i++) {
      if (nums[i - 1] === nums[i]) {
          return true
      }
  }
  return false
};

/**
 * 使用set
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set()
  for (let n of nums) {
      if (set.has(n)) {
          return true
      }
      set.add(n)
  }
  return false
};
