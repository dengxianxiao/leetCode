/**
 *
 * 时间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!nums || nums.length == 1) {
      return nums
  }
  let i = nums.length - 2
  while(i >= 0 && nums[i + 1] <= nums[i]) {
      i--
  }
  if (i >= 0) {
      let j = nums.length - 1
      while (j >= 0 && nums[j] <= nums[i]) {
          j--
      }
      swap(nums, i, j)
  }
  reverse(nums, i + 1)
};

const reverse = function(nums, start) {
  let i = start
  let j = nums.length - 1
  while (i < j) {
      swap(nums, i, j)
      i++
      j--
  }
}

const swap = function(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
