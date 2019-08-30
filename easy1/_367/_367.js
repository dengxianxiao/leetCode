/**
 * 367. 有效的完全平方数
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False

 */

/**
 * 二分查找
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let low = 1
  let high = num
  while (low <= high) {
      let mid = low + Math.floor((high - low) / 2)
      if (mid * mid === num) {
          return true
      } else if (mid * mid < num) {
          low = mid + 1
      } else {
          high = mid - 1
      }
  }
  return false
};


/**
 * 数学问题
 * 时间复杂度O(sqrt(n))
1 = 1
4 = 1 + 3
9 = 1 + 3 + 5
16 = 1 + 3 + 5 + 7
25 = 1 + 3 + 5 + 7 + 9
36 = 1 + 3 + 5 + 7 + 9 + 11
....
so 1+3+...+(2n-1) = (2n-1 + 1)n/2 = nn


 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 1
  while (num > 0) {
      num -= i
      i += 2
  }
  return num === 0
};
