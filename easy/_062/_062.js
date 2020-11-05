/**
 * 动态规划 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const arr = new Array(m)
  for (let i = 0; i < m; i++) {
      arr[i] = new Array(n)
      if (i === 0) {
          arr[i].fill(1)
      }
      arr[i][0] = 1
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
      }
  }
  return arr[m - 1][n - 1]
};

/**
 * 优化动态规划 dp[i] = dp[i - 1] + dp[i]
 * 时间复杂度O(mn)
 * 空间复杂度O(n)
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const arr = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          arr[j] = arr[j] + arr[j - 1]
      }
  }
  return arr[n - 1]
};
