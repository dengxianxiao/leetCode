/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  let maxCur = 0, maxSoFar = 0;
  for(let i = 1; i < prices.length; i++) {
      maxCur = Math.max(0, maxCur += prices[i] - prices[i-1])
      maxSoFar = Math.max(maxCur, maxSoFar)
  }
  return maxSoFar
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  if (!prices.length) {
      return 0
  }
  let max = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      } else if (prices[i] - minPrice > max) {
          max = prices[i] - minPrice
      }
  }
  return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function(prices) {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          let curProfit = prices[j] - prices[i]
          if (curProfit > max) {
              max = curProfit
          }
      }
  }
  return max
};
