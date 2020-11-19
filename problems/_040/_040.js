/**
 * 递归+回溯
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  const combine = []
  const map = new Map()
  candidates.sort((a, b) => a - b)
  candidates.forEach(val => {
      if (map.get(val)) {
          map.set(val, map.get(val) + 1)
      } else {
          map.set(val, 1)
      }
  })
  const dfs = (pos, rest) => {
      if (rest === 0) {
          result.push(combine.concat())
          return
      }

      let curVal
      let i = 0
      for (let val of map.keys()) {
          if (i === pos) {
              curVal = val
          }
          i++
      }
      if (pos === map.size || rest < curVal) {
          return
      }

      // 跳过当前值
      dfs(pos + 1, rest)
      // 使用当前值
      const most = Math.min(Math.floor(rest / curVal), map.get(curVal))
      for (let i = 1; i <= most; i++) {
          combine.push(curVal)
          dfs(pos + 1, rest - i * curVal)
      }
      for (let i = 1; i <= most; i++) {
          combine.pop()
      }
  }
  dfs(0, target)
  return result
};
