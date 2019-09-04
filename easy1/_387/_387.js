/**
 * 387. 字符串中的第一个唯一字符

 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
 

 */

/**
 * 使用obj存储每个字符出现的次数
 * 再遍历一次判断等于1的字符
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
      if (obj.hasOwnProperty(s[i])) {
          obj[s[i]]++
      } else {
          obj[s[i]] = 1
      }
  }
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] === 1) {
          return i
      }
  }
  return -1
};
