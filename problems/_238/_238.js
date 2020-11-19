/**
 *
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length
  const ans = new Array(len)

  // 左边数的乘积
  ans[0] = 1
  for (let i = 1; i < len; i++) {
      ans[i] = ans[i - 1] * nums[i - 1]
  }

  // 右边数的乘积
  let right = 1
  for (let i = len - 1; i >= 0; i--) {
      ans[i] = right * ans[i]
      right *= nums[i] // 累加器
  }
  return ans
};

/**
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length

  const left = new Array(len)
  const right = new Array(len)
  const ans = new Array(len)

  // 左边数的乘积
  left[0] = 1
  for (let i = 1; i < len; i++) {
      left[i] = left[i - 1] * nums[i - 1]
  }

  // 右边数的乘积
  right[len - 1] = 1
  for (let i = len - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < len; i++) {
      ans[i] = left[i] * right[i]
  }
  return ans
};
