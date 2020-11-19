/**
 *
 * 标记法
 * 时间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const ans = []
  for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1
      if (nums[index] < 0) {
          ans.push(Math.abs(nums[i]))
      }
      nums[index] = -nums[index]
  }
  return ans
};
