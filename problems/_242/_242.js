/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 */

/**
 * 排序
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

/**
 * 哈希表
 * 定义一个长度为26的数组存s中26个字母出现的次数
 * 循环减掉数组中字母出现的次数，出现负数则结束
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sLen = s.length
  let tLen = t.length
  if (sLen !== tLen) {
      return false
  }
  let arr = new Array(26).fill(0)
  let aCharCode = 'a'.charCodeAt(0)
  for (let i = 0; i < sLen; i++) {
      arr[s.charCodeAt(i) - aCharCode]++
  }
  for (let i = 0; i < tLen; i++) {
      arr[t.charCodeAt(i) - aCharCode]--
      if (arr[t.charCodeAt(i) - aCharCode] < 0) {
          return false
      }
  }
  return true
};
