/**
 * 排序+双指针
 * 时间复杂度O(n^2)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
      return
  }
  nums.sort((a, b) => a - b)
  let result = nums[0] + nums[1] + nums[2]
  const n = nums.length
  for (let first = 0; first < n; first++) {
      let second = first + 1
      let third = n - 1
      while(second < third) {
          const sum = nums[first] + nums[second] + nums[third]
          if (sum === target) {
              return sum
          }
          if (Math.abs(sum - target) < Math.abs(result - target)) {
              result = sum
          }
          if (sum > target) {
              third--
          } else {
              second++
          }
      }
  }
  return result
};
