/**
 * 290. 单词规律
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。 

 */

/**
 * 定义两个对象obj, objStr存储pattern和str的遍历结果
pattern 'aaaa' => '0000'
str 'dog cat cat dog' => '0110'

'0000'和'0110'第二个数字不一致直接返回false

时间复杂度O(n), 最差情况下要遍历一遍
空间复杂度O(n), 存储所有遍历的值
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let obj = {}
  let objStr = {}
  let strArr = str.split(' ')
  let len = pattern.length
  if (strArr.length !== len) {
      return false
  }
  for (let i = 0; i < len; i++) {
      if (!obj.hasOwnProperty(pattern[i])) {
          obj[pattern[i]] = i
      }
      if (!objStr.hasOwnProperty(strArr[i])) {
          objStr[strArr[i]] = i
      }
      if (obj[pattern[i]] !== objStr[strArr[i]]) {
          return false
      }
  }
  return true
};
