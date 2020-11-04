/**
 *
 * 按层遍历
 * 时间复杂度O(mn)
 * 空间复杂度O(1)
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) {
      return []
  }
  const ans = []
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          ans.push(matrix[top][column])
      }
      for (let row = top + 1; row <= bottom; row++) {
          ans.push(matrix[row][right])
      }
      // 遍历内环，等于时只剩中间的值或者没有
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              ans.push(matrix[bottom][column])
          }
          for (let row = bottom; row > top; row--) {
              ans.push(matrix[row][left])
          }
      }
      left++
      right--
      top++
      bottom--
  }
  return ans
};
