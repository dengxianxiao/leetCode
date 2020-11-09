/**
 * 遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  for (let num of nums) {
      if (i < 2 || num > nums[i - 2]) {
          nums[i++] = num
      }
  }
  return i
};

/**
 * 遍历
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const removeElement = (nums, index) => {
      for (let i = index + 1; i < nums.length; i++) {
          nums[i - 1] = nums[i]
      }
  }
  let i = 1
  let count = 1
  let len = nums.length
  while (i < len) {
      if (nums[i - 1] === nums[i]) {
          count++
          if (count > 2) {
              removeElement(nums, i)
              i--
              len--
          }
      } else {
          count = 1
      }
      i++
  }
  return len
};
