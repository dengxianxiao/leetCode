/**
 * 258. Add Digits
 *
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */

/**
 * 数学问题：数字跟
 * https://baike.baidu.com/item/%E6%95%B0%E6%A0%B9/4838735?fr=aladdin
 *
 * 定义编辑
  将一正整数的各个位数相加(即横向相加)后，若加完后的值大于等于10的话，则继续将各位数进行横向相加直到其值小于十为止所得到的数，即为数根。换句话说，数根是将一数字重复做其数字之和，直到其值小于十为止，则所得的值为该数的数根。例如54817的数根为7，因为5+4+8+1+7=25，25大于10则再加一次，2+5=7，7小于十，则7为54817的数根。
  性质编辑
  x+9与x的数根相同，即一个数加9后它的数根不变。
  公式法求数根：
  a的数根b = (a-1) % 9+1, 即 mod(a-1, 9)+1，且a ∈ N*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return 1 + (num - 1) % 9
};

/**
 * @param {number} num
 * @return {number}
 */
var addDigits1 = function(num) {
  if (num < 10) {
      return num
  }
  let tmp = num
  while (tmp >= 10) {
      num = tmp
      tmp = 0
      while (num) {
          let currDigit = num % 10
          tmp += currDigit
          num = Math.floor(num / 10)
      }
  }
  return tmp
};
