/**
 * 389. 找不同
 * 给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。

 */

/**
 * 二进制位运算，异或运算符
 *
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {string} s
 * @param {string} t
 * @return {character}
 *
 */
var findTheDifference = function(s, t) {
  let len = t.length
  let c = t[len - 1].charCodeAt()
  for (let i = 0; i < len - 1; i++) {
      c ^= s[i].charCodeAt()
      c ^= t[i].charCodeAt()
  }
  return String.fromCharCode(c)
};

/**
 * 遍历s，使用obj存储s中的字符出现的次数，
 * 遍历t，减掉obj中字符出现的次数
 * 遍历obj，不为0则是新增的字符
 *
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let obj = {}
  for (let i = 0, l = s.length; i < l; i++) {
      if (obj.hasOwnProperty(s[i])) {
          obj[s[i]]++
      } else {
          obj[s[i]] = 1
      }
  }
  for (let i = 0, l = t.length; i < l; i++) {
      if (obj.hasOwnProperty(t[i])) {
          obj[t[i]]--
      } else {
          return t[i]
      }
  }
  for (let key in obj) {
      if (obj[key] !== 0)
      return key
  }
  return ''
};
