
/**
 * 1、双指针
 * 时间复杂度 O(n)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let ans = 0
  let l = 0
  let r = height.length - 1
  while(l < r) {
      const area = Math.min(height[l], height[r]) * (r - l)
      ans = Math.max(ans, area)
      if (height[l] <= height[r]) {
          l++
      } else {
          r--
      }
  }
  return ans
};

/**
 * 2、遍历
 * 时间复杂度O(n^2)
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0; i < height.length - 1; i++) {
      for (j = i + 1; j < height.length; j++) {
          max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
      }
  }
  return max
};
