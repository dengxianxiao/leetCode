/**
 * 循环判断目标值在哪个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || !target) {
      return 0
  }
  if (target < nums[0]) {
      return 0
  }
  let len = nums.length
  if (target > nums[len - 1]) {
      return len
  }
  for (let i = 1; i < len; i++) {
      if (target >= nums[i - 1] && target <= nums[i]) {
          if (target === nums[i - 1]) {
              return i - 1
          }
          return i
      }
  }
  return 0
};

/**
 * 使用indexOf 和 findIndex
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function(nums, target) {
  if (!nums || !target) {
      return 0
  }
  if (target < nums[0]) {
      return 0
  }
  let len = nums.length
  if (target > nums[len - 1]) {
      return len
  }
  let index = nums.indexOf(target)
  if (index !== -1) {
      return index
  } else {
      return nums.findIndex(num => num > target)
  }
};

/**
 * 二分查找法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert3 = function(nums, target) {
  if (!nums || !target) {
      return 0
  }
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
      let mid = Math.floor((i + j) / 2)
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] > target) {
          j = mid - 1
      } else {
          i = mid + 1
      }
  }
  return i
};