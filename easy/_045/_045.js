/**
 *
 * 贪心算法：正向查找可到达的最大位置
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for (let i = 0; i < len - 1; i++) {
      maxPosition = Math.max(maxPosition, i + nums[i])
      if (i === end) {
          end = maxPosition
          steps++
      }
  }
  return steps
};

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0
  let i = 0
  while (i < nums.length - 1) {
      if (nums[i] + i >= nums.length - 1) {
          count++
          break
      }
      if (nums[i] === 1) {
          count++
          i++
          continue
      }

      // 找到接下来的数中最好的位置
      let nextIndex = i + 1
      let nextVal = nums[i + 1]
      for (let j = i + 2; j <= nums[i] + i; j++) {
          if (nums[j] + j >= nextVal + nextIndex) {
              nextIndex = j
              nextVal = nums[j]
          }
      }
      i = nextIndex
      count++
  }
  return count
};

/**
 *
 * 贪心算法：反向查找出发位置
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0
  let position = nums.length - 1
  while (position > 0) {
      for (let i = 0; i < position; i++) {
          if (nums[i] + i >= position) {
              position = i
              count++
              break
          }
      }
  }
  return count
};
