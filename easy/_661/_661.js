
/**
 *
 * 暴力法
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let m = M.length
  let n = M[0].length
  const res = new Array(m)
  for (let i = 0; i < res.length; i++) {
      res[i] = new Array(n)
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let count = 0
          let sum = 0
          for (let ni = i - 1; ni <= i + 1; ni++) {
              for (let nj = j - 1; nj <= j + 1; nj++) {
                  if (0 <= ni && ni < m && 0 <= nj && nj < n) {
                      sum += M[ni][nj]
                      count++
                  }
              }
          }
          res[i][j] = Math.floor(sum / count)
      }
  }
  return res
};

/**
 *
 * 暴力法
 * 时间复杂度O(mn)
 * 空间复杂度O(mn)
 *
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let m = M.length
  let n = M[0].length
  const res = new Array(m)
  for (let i = 0; i < res.length; i++) {
      res[i] = new Array(n)
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let sum = M[i][j]
          let count = 1
          // 上一行
          if (i - 1 >= 0) {
              sum += M[i - 1][j]
              count++
              if (j - 1 >= 0) {
                  sum += M[i - 1][j - 1]
                  count++
              }
              if (j + 1 < n) {
                  sum += M[i - 1][j + 1]
                  count++
              }
          }

          // 同一行
          if (j - 1 >= 0) {
              sum += M[i][j - 1]
              count++
          }
          if (j + 1 < n) {
              sum += M[i][j + 1]
              count++
          }

          // 下一行
          if (i + 1 < m) {
              sum += M[i + 1][j]
              count++
              if (j - 1 >= 0) {
                  sum += M[i + 1][j - 1]
                  count++
              }
              if (j + 1 < n) {
                  sum += M[i + 1][j + 1]
                  count++
              }
          }
          res[i][j] = Math.floor(sum / count)
      }
  }
  return res
};
