/**
 * 计算每一个相邻的峰和谷，求总和
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  let maxProfitValue = 0
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          maxProfitValue += prices[i] - prices[i - 1]
      }
  }
  return maxProfitValue
};


/**
 * 计算每一个相邻的峰和谷，求总和
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  let maxProfitValue = 0
  let valley = prices[0]
  let peak = prices[0]
  let i = 0
  let len = prices.length
  while (i < len - 1) {
      if (i < len && prices[i] >= prices[i + 1]) {
          i++
      }
      valley = prices[i]
      if (i < len && prices[i] <= prices[i + 1]) {
          i++
      }
      peak = prices[i]
      maxProfitValue += peak - valley
  }
  return maxProfitValue
};
