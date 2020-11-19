/**
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。

 */

/**
 * 剪切后K个数，在钱前面插入
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  k = k > len ? k % len : k
  let lastk = nums.splice(len - k, len)
  nums.unshift(...lastk)
};


var reverse = function (nums, i, j) {
  while (i < j) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      i++
      j--
  }
}

/**
 * e.g. : [1,2,3,4,5,6,7], k = 3
 * 1. [7,6,5,4,3,2,1]
 * 2. [5,6,7,4,3,2,1]
 * 3. [5,6,7,1,2,3,4]
 *
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
var rotate = function(nums, k) {
  let len = nums.length
  k = k > len ? k % len : k
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
};
