/**
 * 使用splice剪切原数组
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
  if (!nums) {
      return 
  }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1)
          i--
      }
  }
  return nums.length
};

/**
 * 双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums) {
      return 
  }
  let i = 0
  for (let j = 0, len = nums.length; j < len; j++) {
      if (nums[j] !== val) {
          nums[i] = nums[j]
          i++
      }
  }
  return i
};

/**
 * 双指针 —— 当要删除的元素很少时
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums) {
      return 
  }
  let i = 0
  let len = nums.length
  while (i < len) {
      if (nums[i] === val) {
          nums[i] = nums[len - 1]
          len--
      } else {
          i++
      }
  }
  return len
};