/**
 *
 * 翻转矩阵
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length

  // 转置矩阵
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          const temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
      }
  }

  // 翻转每行
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < Math.floor(n / 2); j++) {
          const temp = matrix[i][j]
          matrix[i][j] = matrix[i][n - j - 1]
          matrix[i][n - j - 1] = temp
      }
  }
};
