/**
 * 371. 两整数之和
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:

输入: a = 1, b = 2
输出: 3
示例 2:

输入: a = -2, b = 3
输出: 1

 */

/**
 *
a & b 二进制计算进位
0100 & 0101 = 0100， 0100右移一位得出进位
a ^ b 异或运算，无进位加法
0101 ^ 0100 = 0001
循环执行两个运训知道无进位为止
 */


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (a === 0) {
      return b
  }
  if (b === 0) {
      return a
  }
  while (b !== 0) {
      carry = a & b
      a = a ^ b
      b = carry << 1
  }
  return a
};
