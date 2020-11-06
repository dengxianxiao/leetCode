/**
 *
 * 时间复杂度O(m*n)
 * 空间复杂度O(m+n)
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rows = new Set()
  const cols = new Set()
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              rows.add(i)
              cols.add(j)
          }
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (rows.has(i) || cols.has(j)) {
              matrix[i][j] = 0
          }
      }
  }
};

/**
 *
 * 优化后
 * 时间复杂度O(m*n)
 * 空间复杂度O(1)
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let isFirstColZero = false // 用于判断第一列是否为0

  for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
          isFirstColZero = true
      }

      // 用第一行和第一列打标记
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = 0
              matrix[0][j] = 0
          }
      }
  }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0
          }
      }
  }

  // 判断第一行是否为0
  if (matrix[0][0] === 0) {
      for (let j = 1; j < n; j++) {
          matrix[0][j] = 0
      }
  }

  // 判断第一列是否为0
  if (isFirstColZero === 0) {
      for (let i = 0; i < m; i++) {
          matrix[i][0] = 0
      }
  }
};
