/**
 * 447. 回旋镖的数量
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let map = new Map()
  let res = 0
  for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points.length; j++) {
          if (i === j) {
              continue
          }
          // 计算两点之间的距离放到map中
          let d = getDistance(points[i], points[j])
          if (map.has(d)) {
              map.set(d, map.get(d) + 1)
          } else {
              map.set(d, 1)
          }
      }
      // 根据当前点，从剩余中拿两个点组成3个点，所以为val * (val - 1)
      for (val of map.values()) {
          res += val * (val - 1)
      }
      map.clear()
  }
  return res
};

var getDistance = function(a, b) {
  let dx = a[0] - b[0]
  let dy = a[1] - b[1]
  return dx * dx + dy * dy
}
