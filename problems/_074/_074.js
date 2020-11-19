/**
 * 二分查找
 * 时间复杂度O(log(mn))
 * 空间复杂度O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) {
      return false
  }
  let i = 0
  let j = matrix.length - 1
  const n = matrix[0].length
  while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (target >= matrix[mid][0] && target <= matrix[mid][n - 1]) {
          return matrix[mid].findIndex(val => val === target) >= 0
      } else if (target < matrix[mid][0]) {
          j = mid - 1
      } else {
          i = mid + 1
      }
  }
  return false
};
