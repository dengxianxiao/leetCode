/**
 *
 * 动态规划
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
      return
  }
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
      dp[i] = new Array(n).fill(0)
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i === 0 && j === 0) {
              dp[i][j] = grid[i][j]
          } else if (j === 0 && i > 0) {
              // 第一行
              dp[i][j] = dp[i - 1][j] + grid[i][j]
          } else if (i === 0 && j > 0) {
              // 第一列
              dp[i][j] = dp[i][j - 1] + grid[i][j]
          } else {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
          }
      }
  }
  return dp[m - 1][n - 1]
};

/**
 *
 * 优化动态规划
 * 时间复杂度O(mn)
 * 空间复杂度O(n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
      return
  }
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 0; i < m; i++) {
      dp[0] += grid[i][0]
      for (let j = 1; j < n; j++) {
          dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
      }
  }
  return dp[n - 1]
};
