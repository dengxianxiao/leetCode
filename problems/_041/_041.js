/**
 *
 * 置换
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
      // 1 -- len, 将值置换为对应下标的值
      while (nums[i] > 0 && nums[i] < len && nums[nums[i] - 1] !== nums[i]) {
          const temp = nums[nums[i] - 1]
          nums[nums[i] - 1] = nums[i]
          nums[i] = temp
      }
  }
  for (let i = 0; i < len; i++) {
      if (nums[i] !== i + 1) {
          return i + 1
      }
  }
  // 没有正数，则是len + 1
  return len + 1
};

/**
 *
 * 哈希表，将数组改造为哈希表
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
      // 将负数替换为len+1
      if (nums[i] <= 0) {
          nums[i] = len + 1
      }
  }
  for (let i = 0; i < len; i++) {
      // 将小于len 的对应下标数替换为负数
      const num = Math.abs(nums[i])
      if (num <= len) {
          nums[num - 1] = -Math.abs(nums[num - 1])
      }
  }
  console.log(nums)
  // 找到第一个正数，返回索引+1
  for (let i = 0; i < len; i++) {
      if (nums[i] > 0) {
          return i + 1
      }
  }
  // 没有正数，则是len + 1
  return len + 1
};

/**
 *
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(nlogn)
 * 取决于快速排序
 * findIndex
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums.sort((a, b) => a - b)
  let index = nums.findIndex(num => num === 1)
  if (index === -1) {
      return 1
  }
  while(index <= nums.length - 1 && (nums[index] === nums[index + 1] || nums[index] + 1 === nums[index + 1])) {
      index++
  }
  return nums[index] + 1
};
