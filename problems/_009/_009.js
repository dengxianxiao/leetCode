
/**
 * 使用字符串反转判断
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function(x) {
  return Number(x.toString().split('').reverse().join('')) === x
};


/**
 * x 为数字，可以求余反转数字
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if (x < 0) {
      return false
  }
  let xCopy = x
  let y = 0
  while (x !== 0) {
      y = y * 10 + x % 10
      x = parseInt(x / 10)
  }
  return xCopy === y
};

/**
 * 同样使用数字求余反转，不过只反转一半
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome3 = function(x) {
  // 最后一位是0的情况不是回文
  if (x < 0 || (x % 10 === 0 && x != 0)) {
      return false
  }
  let y = 0
  while (x > y) {
      y = y * 10 + x % 10
      x = parseInt(x / 10)
  }
  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x === y || x === parseInt(y / 10)
};