/**
 *
 * 栈
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  let n = nums.length
  let stack = []
  // 找左边界
  let left = n
  for (let i = 0; i < n; i++) {
      while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
          left = Math.min(left, stack.pop())
      }
      stack.push(i)
  }
  stack = []
  // 找右边界
  let right = 0
  for (let i = n - 1; i >= 0; i--) {
      while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
          right = Math.max(right, stack.pop())
      }
      stack.push(i)
  }
  return right > left ? right - left + 1 : 0
};

/**
 *
 * 双指针
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  let n = nums.length
  let flag = false
  let minVal = Number.POSITIVE_INFINITY
  for (let i = 0; i < n; i++) {
      // 不是递增的，求最小值
      if (nums[i] < nums[i - 1]) {
          flag = true
      }
      if (flag) {
          minVal = Math.min(minVal, nums[i])
      }
  }
  flag = false
  let maxVal = Number.NEGATIVE_INFINITY
  for (let i = n - 2; i >= 0; i--) {
      // 不是递减的，求最大值
      if (nums[i] > nums[i + 1]) {
          flag = true
      }
      if (flag) {
          maxVal = Math.max(maxVal, nums[i])
      }
  }

  let left
  for (left = 0; left < n; left++) {
      if (minVal < nums[left]) {
          break
      }
  }
  let right
  for (right = n - 1; right >= 0; right--) {
      if (maxVal > nums[right]) {
          break
      }
  }
  return right > left ? right - left + 1 : 0
};

/**
 *
 * 排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  let n = nums.length
  arr = nums.slice()
  arr.sort((a, b) => a - b)
  let left = n
  let right = 0
  for (let i = 0; i < n; i++) {
      if (nums[i] !== arr[i]) {
          left = Math.min(left, i)
          right = Math.max(right, i)
      }
  }
  return right > left ? right - left + 1 : 0
};
