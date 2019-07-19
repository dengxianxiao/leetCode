/**
 *
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。

 */

/**
 * 给字符串每个字符定一个顺序
 * 比如abba : 1221  abab: 1212
 * 1221 !== 1212
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let objS = {}
  let objT = {}
  let sCount = 0
  let tCount = 0
  for (let i = 0, l = s.length; i < l; i++) {
      let s1 = objS[s[i]] ? objS[s[i]] : ++sCount
      let t1 = objT[t[i]] ? objT[t[i]] : ++tCount
      if (s1 !== t1) {
          return false
      }
      objS[s[i]] = s1
      objT[t[i]] = t1
  }
  return true
};
