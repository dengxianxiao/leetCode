/**
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
 */

/**
 * 不能先求阶层在计算0的个数，大整数会报错
 *
 * 所有质数中只有 2 * 5 = 10 后面有0
 * 求n的阶层可以把能分解为2或5的数据都分解
 * 比如：10! = 10*9*8*7*6*5*4*3*2*1 = (2*5)*9*8*7*6*5*(2*2)*3*2*1
 * 2和5一对一配置算一个0，观察发现2总会比5多，所以只需要计算5的个数就行
 *
 * 假若N=31 31里能凑10的5为[5, 2*5, 3*5, 4*5, 25, 6*5] 其中 25还能拆为 5**2
 * 所以 里面的5的个数为 int(31/(5**1)) +  int(31/(5**2))
 * 所以 只要先找个一个 5**x < n 的x的最大数 然后按上面循环加起来
 *
 */

/**
 * 迭代
 *
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0
  while (n > 0) {
      let tmp = Math.floor(n / 5)
      count += tmp
      n = tmp
  }
  return count
};

/**
 * 递归
 *
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5))
};
