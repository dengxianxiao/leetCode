/**
 *
 * 383. 赎金信
 *
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

 */

/**
 * 使用array[26]存储magazine中字母的个数，
 * 再遍历ransomNote访问array字母数字是否足够
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const arr = new Array(26).fill(0)
  const aCode = 'a'.charCodeAt()
  for (let i = 0, l = magazine.length; i < l; i++) {
      arr[magazine[i].charCodeAt() - aCode]++
  }
  for (let i = 0, l = ransomNote.length; i < l; i++) {
      if (--arr[ransomNote[i].charCodeAt() - aCode] < 0) {
          return false
      }
  }
  return true
};

/**
 * 遍历ransomNote存储，在magazine中查找是否找全
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ransomNoteObj = {}
  for (let i = 0, l = ransomNote.length; i < l; i++) {
      if (ransomNoteObj.hasOwnProperty(ransomNote[i])) {
          ransomNoteObj[ransomNote[i]]++
      } else {
          ransomNoteObj[ransomNote[i]] = 1
      }
  }
  for (let key in ransomNoteObj) {
      let reg = new RegExp('[' + key + ']', ['g'])
      let currKeyMatch = magazine.match(reg)
      if (!currKeyMatch || currKeyMatch.length < ransomNoteObj[key]) {
          return false
      }
  }
  return true
};
