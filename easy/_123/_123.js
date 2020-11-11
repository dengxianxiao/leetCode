/**
 *
 * 动态规划
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let oneBuyOneSell = 0
  let twoBuyTwoSell = 0
  let oneBuy = Number.POSITIVE_INFINITY
  let twoBuy = Number.POSITIVE_INFINITY

  for(let i = 0; i < prices.length; i++) {
      const p = prices[i]
      // 第一笔买入
      oneBuy = Math.min(oneBuy, p)
      // 第一笔卖出
      oneBuyOneSell = Math.max(oneBuyOneSell, p - oneBuy)
      // 第二笔买入，价格要减掉第一笔的收益
      twoBuy = Math.min(twoBuy, p - oneBuyOneSell)
      // 第二笔卖出，为最终收益
      twoBuyTwoSell = Math.max(twoBuyTwoSell, p - twoBuy)
  }

  return twoBuyTwoSell
};
