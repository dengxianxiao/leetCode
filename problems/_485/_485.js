/**
 * 485. 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let arr = nums.join('').split('0')
  let maxLen = 0
  arr.forEach(s => maxLen = Math.max(maxLen, s.length))
  return maxLen
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes2 = function(nums) {
  let max = 0
  let maxHere = 0
  nums.forEach(num => max = Math.max(max, maxHere = (num === 0 ? 0 : maxHere + 1)))
  return max
};
