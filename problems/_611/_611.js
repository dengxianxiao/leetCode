/**
 *
 * 排序+双指针
 * 时间复杂度O(n²)
 * 空间复杂度O(logn)
 *
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let n = nums.length
  nums.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < n - 2; i++) {
      let k = i + 2
      for (let j = i + 1; j < n && nums[i] !== 0; j++) {
          while (k < n && nums[i] + nums[j] > nums[k]) {
              k++
          }
          count += k - j - 1
      }
  }
  return count
};

/**
 *
 * 暴力法
 * 时间复杂度O(n³)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let n = nums.length
  let count = 0
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          for (let k = j + 1; k < n; k++) {
              const a = nums[i]
              const b = nums[j]
              const c = nums[k]
              if (a + b > c && a + c > b && b + c > a) {
                  count++
              }
          }
      }
  }
  return count
};
