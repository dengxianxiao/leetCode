/**
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function(n) {
  if (n <= 0) {
      return 0
  }
  let count = 1
  let curOneCount = 1
  let curTwoCount = 0
  for (let i = 2; i <= n; i++) {
      let tmpTwoCount = curTwoCount
      curTwoCount = curOneCount
      curOneCount += tmpTwoCount
      count = curOneCount + curTwoCount
  }
  return count
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
  if (n === 1) {
      return 1
  }
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs3 = function(n) {
  if (n <= 0) {
      return 0
  }
  if (n === 1) {
      return 1
  }
  let first = 1
  let second = 2
  for (let i = 3; i <= n; i++) {
      let third = first + second
      first = second
      second = third
  }
  return second
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
      return 1
  }
  let sqrt5 = Math.sqrt(5)
  let fibn  = Math.pow((1 + sqrt5) / 2,n + 1) - Math.pow((1 - sqrt5) / 2,n + 1)
  return Number(fibn/sqrt5)
};