/**
 * 268. 丢失的数字
 */

/**
 * 异或运算符
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let len = nums.length
  let xor = len
  for (let i = 0; i < len; i++) {
      xor = xor ^ i ^ nums[i] // a^b^b = a
  }
  return xor
};
