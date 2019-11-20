/**
 * 507. 完美数
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1 || num === 0) {
      return false
  }
  let result = 0
  // 遍历 1--sqrt(num)
  for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
          result += i
          // 避免2 * 2 = 4的场景
          if (i * i !== num) {
              result += num / i
          }
      }
  }
  // i = 1时多加了num本身
  return result - num === num
};

/**
 *
 * 方法二：欧几里得-欧拉定理
欧几里得-欧拉定理告诉我们，每个偶完全数都可以写成 2^{p-1}(2^p-1)2
p−1
 (2
p
 −1) 的形式，其中 pp 为素数。例如前四个完全数可以写成如下形式：

6 = 2^1 * (2^2 - 1)
28 = 2^2 * (2^3 - 1)
496 = 2^3 * (2^4 - 1)
8128 = 2^4 * (2^5 - 1)
由于目前奇完全数还未被发现，因此所有的完全数都可以写成上述形式。
当 n 不超过 10^8 时，p 也不会很大，因此我们只要带入最小的若干个素数 2, 3, 5, 7, 13, 17, 19, 31)，
将不超过 10^8 的所有完全数计算出来即可。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  const primes = [2,3,5,7,13,17,19,31]
  for (let prime of primes) {
      if (fn(prime) === num) {
          return true
      }
  }
  return false
};

var fn = function(p) {
  return (1 << (p - 1)) * ((1 << p) - 1)
}
