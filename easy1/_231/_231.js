/**
 * 231. 2的幂
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

输入: 1
输出: true
解释: 20 = 1
示例 2:

输入: 16
输出: true
解释: 24 = 16
示例 3:

输入: 218
输出: false

 */

 /**
  *
  * 数字n若是2的次方，则一定满足以下条件：
二进制表示下，n最高位为1，其余所有位为0；
二进制表示下，n - 1最高位为0，其余所有位为1（除了n == 1的情况下，n - 1 == 0，即末位为最高位）；
n <= 0时一定不是2的次方。
因此，判断n > 0且n & (n - 1) == 0则可确定n是否是2的次方。

  */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && n & (n - 1) === 0
};


 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if ([1, 2, 4, 8].includes(n)) {
      return true
  }
  for (let i = 4, l = Math.sqrt(n); i <= l; i++) {
      if (Math.pow(2, i) === n) {
          return true
      }
  }
  return false
};
