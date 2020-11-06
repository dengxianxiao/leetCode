/**
 * 递归+回溯
 * 时间复杂度O(n*2n次方)
 * 空间复杂度O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = []
  const t = []
  const dfs = (cur, nums) => {
      if (cur === nums.length) {
          ans.push(t.slice())
          return
      }
      // 取当前数
      t.push(nums[cur])
      dfs(cur + 1, nums)
      // 不取当前数
      t.pop()
      dfs(cur + 1, nums)
  }
  dfs(0, nums)
  return ans
};

/**
 *
 * 迭代
 * 时间复杂度O(n*2n次方)
 * 空间复杂度O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = []
  const n = nums.length
  for (let i = 0; i < (1 << n); i++) {
      const t = []
      for (let j = 0; j < n; j++) {
          if (i & (1 << j)) {
              t.push(nums[j])
          }
      }
      ans.push(t)
  }
  return ans
};
