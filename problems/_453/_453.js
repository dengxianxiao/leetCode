/**
 * 453. 最小移动次数使数组元素相等
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  nums.sort((a, b) => a - b)
  let count = 0
  for (let i = nums.length - 1; i > 0; i--) {
      count += nums[i] - nums[0]
  }
  return count
};
