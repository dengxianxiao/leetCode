/**
 * 448. 找到所有数组中消失的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (!nums || !nums.length) {
      return []
  }
  // 取负数
  for (let i = 0, len = nums.length; i < len; i++) {
      let j = Math.abs(nums[i]) - 1
      if (nums[j] > 0) {
          nums[j] = -nums[j]
      }
  }
  let arr = []
  // 正数则是缺少的值
  for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] > 0) {
          arr.push(i + 1)
      }
  }
  return arr
};

/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (!nums || !nums.length) {
      return []
  }
  // 排序
  for (let i = 0, len = nums.length; i < len; i++) {
      while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
          // 交换两个数的值
          let t = nums[nums[i] - 1]
          nums[nums[i] - 1] = nums[i]
          nums[i] = t
      }
  }
  let arr = []
  for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] !== i + 1) {
          arr.push(i + 1)
      }
  }
  return arr
};
