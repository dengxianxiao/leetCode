/**
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
示例 1:

输入: "A"
输出: 1
示例 2:

输入: "AB"
输出: 28
示例 3:

输入: "ZY"
输出: 701
 */


 /**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if (!s) {
      return ''
  }
  let numA = 'A'.charCodeAt(0)
  let sum = 0
  for (let i = 0, l < s.length; i < l; i++) {
      // 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) = 25, 要+1
      sum = sum * 26 + (s[i].charCodeAt(0) - numA + 1)
  }
  return sum
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  if (!s) {
      return ''
  }
  let numA = 'A'.charCodeAt(0)
  let sum = 0
  let arr = s.split('')
  let i = arr.length - 1
  let j = i
  while (i >= 0) {
      // 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) = 25, 要+1
      let currentCode = arr[i].charCodeAt(0) - numA + 1
      sum += currentCode * Math.pow(26, j - i)
      i--
  }
  return sum
};
