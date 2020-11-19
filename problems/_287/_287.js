/**
 *
 * 二分查找
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const len = nums.length
  let left = 1
  let right = len - 1
  let ans = -1
  while (left <= right) {
      let mid = (left + right) >> 1
      let cnt = 0
      for (let i = 0; i < len; i++) {
          if (nums[i] <= mid) {
              cnt += 1
          }
      }
      if (cnt <= mid) {
          left = mid + 1
      } else {
          right = mid - 1
          ans = mid
      }
  }
  return ans
};

/**
 *
 * 二进制
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const n = nums.length
  let ans = 0
  // 确定二进制下最高位是多少
  let bitMax = 31
  while (!((n - 1) >> bitMax)) {
      bitMax -= 1
  }
  for (let bit = 0; bit <= bitMax; bit++) {
      let x = 0
      let y = 0
      for (let i = 0; i < n; i++) {
          if (nums[i] & (1 << bit)) {
              x += 1
          }
          if (i >= 1 && (i & (1 << bit))) {
              y += 1
          }
      }
      if (x > y) {
          ans |= 1 << bit
      }
  }
  return ans
};
