
/**
 * 排序+双指针
 * 时间复杂度O(n^2)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  const n = nums.length
  nums.sort((a, b) => a - b)
  for (let first = 0; first < n; first++) {
      // 防止与上一次的重复
      if (first > 0 && nums[first] === nums[first - 1]) {
          continue
      }
      let third = n - 1
      const target = -nums[first]
      for (let second = first + 1; second < n; second++) {
          // 防止与上一次的重复
          if (second > first + 1 && nums[second] === nums[second - 1]) {
              continue
          }
          while(second < third && nums[second] + nums[third] > target) {
              third--
          }
          if (second === third) {
              break
          }
          if (nums[second] + nums[third] === target) {
              result.push([nums[first], nums[second], nums[third]])
          }
      }
  }
  return result
};
