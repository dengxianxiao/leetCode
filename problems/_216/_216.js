/**
 *
 * 递归回溯
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const temp = []
  const ans = []
  const dfs = (i, j, k, n, ans) => {
      // (j - i + 1) 1-9表示剩余的数字
      if (temp.length > k || temp.length + (j - i + 1) < k) {
          return
      }
      if (temp.length === k && temp.reduce((val, sum) => val + sum, 0) === n) {
          ans.push(temp.slice())
          return
      }
      // 取当前值
      temp.push(i)
      dfs(i + 1, j, k, n, ans)
      // 不取当前值
      temp.pop()
      dfs(i + 1, j, k, n, ans)
  }

  dfs(1, 9, k, n, ans)
  return ans
};
