/**
 * 单层循环计算当前索引下的最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
  if (!nums) {
      return
  }
  let maxSum = nums[0]
  let currMax = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    // 当前索引下的最大值
    currMax = Math.max(nums[i], currMax + nums[i])
    // 求得需要的最大值
    maxSum = Math.max(currMax, maxSum)
  }
  return maxSum
};


/**
 * 单层循环计算当前索引下的最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
  if (!nums) {
      return
  }
  let maxArr = [nums[0]] // 存放每个索引下的最大值
  let maxSum = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    // 当前索引下的最大值 = 前一个索引的最大值与当前元素的和
    maxArr[i] = nums[i] + (maxArr[i - 1] > 0 ? maxArr[i - 1] : 0)
    // 返回的结果
    maxSum = Math.max(maxArr[i], maxSum)
  }
  return maxSum
};


/**
 * 最慢的，双层循环判断所有的子数组
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray3 = function(nums) {
  let maxSum = nums[0]
  for (let i = 0, len = nums.length; i < len; i++) {
      let tmpSum = nums[i]
      for (let j = i + 1; j < len; j++) {
          if (tmpSum > maxSum) {
              maxSum = tmpSum
          }
          tmpSum += nums[j]
      }
      // i最后一个数不会进j循环
      if (tmpSum > maxSum) {
          maxSum = tmpSum
      }
  }
  return maxSum
};