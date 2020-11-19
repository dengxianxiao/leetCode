/**
 * Description:
 * 
 * Given a string, you need to reverse the order of characters in each word 
 * within a sentence while still preserving whitespace and initial word order.
 *
 * Example:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(/\s+/)
  let newArr = arr.map(obj => obj.split('').reverse().join(''))
  return newArr.join(' ')
};