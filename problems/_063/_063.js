/**
 *
 * 动态规划
 * 时间复杂度O(mn)
 * 空间复杂度O(n)
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  const dp = new Array(n).fill(0)
  dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (obstacleGrid[i][j] === 1) {
              dp[j] = 0
              continue
          }
          if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) {
              dp[j] = dp[j] + dp[j - 1]
          }
      }
  }
  return dp[n - 1]
};
