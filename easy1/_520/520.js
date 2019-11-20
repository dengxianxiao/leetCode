/**
 * 520. 检测大写字母
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let allUpperReg = /^[A-Z]+$/
  let allLowerReg = /^[a-z]+$/
  let oneCapitalReg = /^[A-Z][a-z]+$/
  return allUpperReg.test(word) || allLowerReg.test(word) || oneCapitalReg.test(word)
};

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let upperCount = 0
  let len = word.length
  for (let i = 0; i < len; i++) {
      if (word[i] >= 'A' && word[i] <= 'Z') {
          upperCount++
      }
  }
  return upperCount === 0 || upperCount === len || (upperCount === 1 && word[0] <= 'Z')
};
