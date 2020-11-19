/**
 *
 * 遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ans = []
  if (!nums || !nums.length) {
      return ans
  }
  for (let i = 0, j = 0; j < nums.length; j++) {
      if (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
          continue
      }
      if (i === j) {
          ans.push(nums[i] + '')
      } else {
          ans.push(nums[i] + '->' + nums[j])
      }
      i = j + 1
  }
  return ans
};
