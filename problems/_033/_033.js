
/**
 *
 * 二分查找
 * 时间复杂度O(logn)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length
  if (!len) {
      return -1
  }
  if (len === 1) {
      return nums[0] === target ? 0 : -1
  }
  let i = 0
  let j = len - 1
  while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] === target) {
          return mid
      }
      if (nums[0] <= nums[mid]) {
          // 0 -- mid 是递增的
          if (nums[0] <= target && target < nums[mid]) {
              j = mid - 1
          } else {
              i = mid + 1
          }
      } else {
          // mid -- len 是递增的
          if (nums[mid] < target && target <= nums[len - 1]) {
              i = mid + 1
          } else {
              j = mid - 1
          }
      }
  }
  return -1
};

/**
 *
 * 时间复杂度O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums[0] === target) {
      return 0
  } else if (nums[0] > target) {
      let j = nums.length - 1
      while (nums[j] > target) {
          j--
      }
      if (nums[j] === target) {
          return j
      }
      return -1
  } else {
      let i = 1
      while (i < nums.length - 1 && nums[i] < target) {
          if (nums[i] < nums[0]) {
              return -1
          }
          i++
      }
      if (nums[i] === target) {
          return i
      }
      return -1
  }
};
