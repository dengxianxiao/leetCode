/**
 *
 * 栈，求每个数的左右边界
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) {
      return 0
  }
  if (heights.length === 1) {
      return heights[0]
  }
  let ans = 0
  let len = heights.length
  let left = [] // 每个数的左边界
  let right = new Array(len).fill(len) // 每个数的右边界
  let stack = [] // 栈，用于遍历

  // 求每个数的左右边界
  for (let i = 0; i < len; i++) {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
          right[stack[stack.length - 1]] = i
          stack.pop()
      }
      left[i] = stack.length ? stack[stack.length - 1] : -1
      stack.push(i)
  }

  // 求最大值
  for (let i = 0; i < len; i++) {
      ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i])
  }
  return ans
};

/**
 *
 * 栈，求每个数的左右边界
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) {
      return 0
  }
  if (heights.length === 1) {
      return heights[0]
  }
  let ans = 0
  let len = heights.length
  let left = [] // 每个数的左边界
  let right = [] // 每个数的右边界
  let stack = [] // 栈，用于遍历

  // 求每个数的左边界
  for (let i = 0; i < len; i++) {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
          stack.pop()
      }
      left[i] = stack.length ? stack[stack.length - 1] : -1
      stack.push(i)
  }

  // 求每个数的右边界
  stack = []
  for (let i = len - 1; i >= 0; i--) {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
          stack.pop()
      }
      right[i] = stack.length ? stack[stack.length - 1] : len
      stack.push(i)
  }

  // 求最大值
  for (let i = 0; i < len; i++) {
      ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i])
  }
  return ans
};

/**
 *
 * 暴力法，枚举高度
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) {
      return 0
  }
  if (heights.length === 1) {
      return heights[0]
  }
  let ans = 0
  let len = heights.length
  for (let i = 0; i < len; i++) {
      const mid = heights[i]
      let left = i
      let right = i
      while (left - 1 >= 0 && heights[left - 1] >= mid) {
          left--
      }
      while (right + 1 < len && heights[right + 1] >= mid) {
          right++
      }
      ans = Math.max(ans, (right - left + 1) * mid)
  }
  return ans
};

/**
 * 暴力法，枚举宽度
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || !heights.length) {
      return 0
  }
  if (heights.length === 1) {
      return heights[0]
  }
  let ans = 0
  let minHeight = 0
  const len = heights.length
  for (let i = 0; i < len; i++) {
      minHeight = Number.MAX_SAFE_INTEGER
      for (let j = i; j < len; j++) {
          minHeight = Math.min(minHeight, heights[j])
          ans = Math.max(ans, (j - i + 1) * minHeight)
      }
  }
  return ans
};
