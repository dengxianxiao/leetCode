/**
 * 统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */

/**
 * 判断一个数是否是质数
 * @param {Number} num
 */
var isPrime = function (num) {
  if (num <= 3) {
      return num > 1
  }
  if (num % 2 === 0 || num % 3 === 0) {
      return false
  }
  let sqrt = Math.floor(Math.sqrt(num))
  for (let i = 5; i <= sqrt; i+=6) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false
      }
  }
  return true
}
/**
* @param {number} n
* @return {number}
*/
var countPrimes = function(n) {
  if (n <= 2) {
      return 0
  }
  let count = 1
  for (let i = 3; i < n; i+=2) {
      if (isPrime(i)) {
          count++
      }
  }
  return count
};
