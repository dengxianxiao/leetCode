/**
 * 动态规划
 * 时间复杂度O(n²) n为三角形行数
 * 空间复杂度O(n)
 *
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (!triangle || !triangle.length || !triangle[0].length) {
      return
  }
  // 等腰三角形
  const n = triangle.length
  const ansArr = new Array(n)
  ansArr[0] = triangle[0][0]
  for (let i = 1; i < n; i++) {
      // 求对角的值
      ansArr[i] = ansArr[i - 1] + triangle[i][i]
      for (let j = i - 1; j > 0 ; j--) {
          ansArr[j] = Math.min(ansArr[j], ansArr[j - 1]) + triangle[i][j]
      }
      // 求第一列的值
      ansArr[0] += triangle[i][0]
  }
  let ans = ansArr[0]
  ansArr.forEach(val => {
      ans = Math.min(val, ans)
  })
  return ans
};
