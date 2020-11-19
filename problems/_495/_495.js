/**
 *
 * 遍历
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 *
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries || !timeSeries.length || !duration) {
      return 0
  }
  let totalTimes = duration
  const n = timeSeries.length
  for (let i = 1; i < n; i++) {
      const times = timeSeries[i] - timeSeries[i - 1]
      totalTimes += times >= duration ? duration : times
  }
  return totalTimes
};
