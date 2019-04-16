# 9. 回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

## 1. 使用字符串反转判断

```js
var isPalindrome1 = function(x) {
  return Number(x.toString().split('').reverse().join('')) === x
};
```

## 2. x 为数字，可以求余反转数字

```js
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
```

## 3. 同样使用数字求余反转，不过只反转一半,与剩余的一半比较

```js
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
```