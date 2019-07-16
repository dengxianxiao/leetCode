/**
 * 202. 快乐数
 *
 * 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 */

 /**
  *
不是快乐数的数称为不快乐数(unhappy number)，所有不快乐数的数位平方和计算，最后都会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中
已知规律： [1 ~ 4] 中只有 1 是快乐数，[5 ~ ∞] 的数字要么回归到 1 要么回归到 4 或 3
因此仅需在 n > 4 时调用递归

  */

/**
 * 循环计算每个数，知道终止条件成立
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy1 = function(n) {
  while (n != 1) {
      // 判断是否终止
      if (n === 1 || n === 7) {
          return true
      } else if (n < 10) {
          return false
      }
      let sum = 0
      let m = n
      // 求当前平方和
      while (m) {
          let currentValue = m % 10
          sum += currentValue * currentValue
          m = parseInt(m / 10)
      }
      n = sum
  }
  return true
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy2 = function(n) {
  let arr = [n]
  while (n != 1) {
      let sum = 0
      let m = n
      while (m) {
          let currentValue = m % 10
          sum += currentValue * currentValue
          m = parseInt(m / 10)
      }
      n = sum
      if (arr.includes[n]) {
          // 进入循环，结束
          return false
      } else {
          arr.push(n)
      }
  }
  return true
};


var digitSquareSum = function (n) {
  let sum = 0
  let tmp
  while (n) {
      tmp = n % 10
      sum += tmp * tmp
      n = parseInt(n / 10)
  }
  return sum
}

/**
* @param {number} n
* @return {boolean}
*/
var isHappy3 = function(n) {
  let slow = n
  let fast = n
  do {
      slow = digitSquareSum(slow)
      fast = digitSquareSum(fast)
      fast = digitSquareSum(fast)
      if (fast === 1) {
          return true
      }
  } while (slow !== fast)
  if (slow === 1) {
      return true
  }
  return false
};
