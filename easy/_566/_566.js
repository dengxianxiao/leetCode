/**
 *
 * 遍历，独立计算行的列的值
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length || !nums[0].length || !r || !c) {
      return nums
  }
  if (nums.length * nums[0].length != r * c) {
      return nums
  }
  const ans = new Array(r)
  for (let i = 0; i < ans.length; i++) {
      ans[i] = new Array(c)
  }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[0].length; j++) {
          row = Math.floor(count / c)
          col = count % c
          ans[row][col] = nums[i][j]
          count++
      }
  }
  return ans
};

/**
 *
 * 遍历，不使用额外空间
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length || !nums[0].length || !r || !c) {
      return nums
  }
  if (nums.length * nums[0].length != r * c) {
      return nums
  }
  const ans = new Array(r)
  for (let i = 0; i < ans.length; i++) {
      ans[i] = new Array(c)
  }
  let rows = 0
  let cols = 0
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[0].length; j++) {
          ans[rows][cols] = nums[i][j]
          cols++
          if (cols >= c) {
              rows++
              cols = 0
          }
      }
  }
  return ans
};

/**
 *
 * 使用队列
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length || !nums[0].length || !r || !c) {
      return nums
  }
  if (nums.length * nums[0].length != r * c) {
      return nums
  }
  const queue = []
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[0].length; j++) {
          queue.push(nums[i][j])
      }
  }

  const ans = new Array(r)
  for (let i = 0; i < ans.length; i++) {
      ans[i] = new Array(c)
  }
  for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
          ans[i][j] = queue.shift()
      }
  }
  return ans
};

/**
 *
 * 遍历
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums || !nums.length || !nums[0].length || !r || !c) {
      return nums
  }
  if (nums.length * nums[0].length < r * c) {
      return nums
  }
  const ans = []
  let temp = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[i].length; j++) {
          if (count === c) {
              ans.push(temp.slice())
              temp = []
              count = 0
          }
          count++
          temp.push(nums[i][j])
      }
  }
  if (temp.length) {
      ans.push(temp)
  }
  return ans
};
