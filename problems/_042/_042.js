/**
 *
 * 双指针
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  while (left < right) {
      if (height[left] < height[right]) {
          if (height[left] >= leftMax) {
              leftMax = height[left]
          } else {
              ans += (leftMax - height[left])
          }
          left++
      } else {
          if (height[right] >= rightMax) {
              rightMax = height[right]
          } else {
              ans += (rightMax - height[right])
          }
          right--
      }
  }
  return ans
};

/**
 *
 * 栈
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ans = 0
  let current = 0
  const stack = []
  while (current < height.length) {
      while (stack.length && height[current] > height[stack[stack.length - 1]]) {
          const top = stack.pop()
          if (!stack.length)
              break
          const distance = current - stack[stack.length - 1] - 1
          const curHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top]
          ans += distance * curHeight
      }
      stack.push(current++)
  }
  return ans
};

/**
 *
 * 动态编程
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length
  let ans = 0
  const maxLeft = []
  const maxRight = []
  maxLeft[0] = height[0]
  for (let i = 1; i < len; i++) {
      maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
  }
  maxRight[len - 1] = height[len - 1]
  for (let j = len - 2; j >= 0; j--) {
      maxRight[j] = Math.max(height[j], maxRight[j + 1])
  }
  for (let i = 0; i < len; i++) {
      ans += Math.min(maxLeft[i], maxRight[i]) - height[i]
  }
  return ans
};

/**
 *
 * 暴力法
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length
  let ans = 0
  for (let i = 1; i < len; i++) {
      let maxLeft = 0
      let maxRight = 0
      for (let j = i; j >= 0; j--) {
          maxLeft = Math.max(maxLeft, height[j])
      }
      for (let k = i; k < len; k++) {
          maxRight = Math.max(maxRight, height[k])
      }
      ans += Math.min(maxLeft, maxRight) - height[i]
  }
  return ans
};
