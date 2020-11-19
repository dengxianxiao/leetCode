/**
 * 414. 第三大的数
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if (!nums || !nums.length) {
      return 0
  }
  let first = null
  let second = null
  let third = null
  for (let val of nums) {
      if (val === first || val === second || val === third) {
          continue
      }
      if (first === null || val > first) {
          third = second
          second = first
          first = val
      } else if (second === null || val > second) {
          third = second
          second = val
      } else if (third === null || val > third) {
          third = val
      }
  }
  if (third === null) {
      return first
  }
  return third
};
