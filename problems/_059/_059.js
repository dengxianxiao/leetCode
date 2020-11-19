/**
 *
 * 循环遍历
 * 时间复杂度O(n²)
 * 空间复杂度O(1)
 *
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const ans = new Array(n)
    for (let i = 0; i < n; i++) {
        ans[i] = new Array(n)
    }
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1
  let count = 1
  const total = n * n
  while (count <= total) {
      for (let i = left; i <= right; i++) {
          ans[left][i] = count++
      }
      top++
      for (let i = top; i <= bottom; i++) {
          ans[i][right] = count++
      }
      right--
      for (let i = right; i >= left; i--) {
          ans[bottom][i] = count++
      }
      bottom--
      for (let i = bottom; i >= top; i--) {
          ans[i][left] = count++
      }
      left++
  }
  return ans
};
