/**
 *
 * 搜索回溯
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const dfs = (curTarget, combine, idx) => {
      if (idx === candidates.length) {
          return
      }
      if (curTarget === 0) {
          result.push(combine)
          return
      }
      // 跳过当前值
      dfs(curTarget, combine, idx + 1)
      // 使用当前值
      if (curTarget - candidates[idx] >= 0) {
          dfs(curTarget - candidates[idx], [...combine, candidates[idx]], idx)
      }
  }
  dfs(target, [], 0)
  return result
};
