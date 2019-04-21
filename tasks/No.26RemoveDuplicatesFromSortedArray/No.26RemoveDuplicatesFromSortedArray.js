/**
 * 将数组前面几个修改为不重复数组，返回统计长度
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
  if (!nums) {
      return
  }
  let n = nums.length
  if (n < 2) {
      return n
  }
  let id = 1
  for (let i = 1; i < n; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[id++] = nums[i]
      }
  }
  return id
};

/**
 * 将数组前面几个修改为不重复数组，返回统计长度
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
  let count = 0
 for (let i = 1; i < nums.length; i++) {
     if (nums[i - 1] === nums[i]) {
         count++
     } else {
         nums[i - count] = nums[i]
     }
 }
 return nums.length - count
};

/**
 * 使用splice删除重复数据
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates3 = function(nums) {
  for (let i = 1; i < nums.length; i++) {
     if (nums[i - 1] === nums[i]) {
         nums.splice(i - 1, 1)
         i--
     }
 }
 return nums.length
};