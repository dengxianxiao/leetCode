/**
 * @param {number} x
 * @return {number}
 */
var mySqrt1 = function(x) {
  let r = x
  while (r * r > x) {
    r = Math.floor((r + x / r) / 2)
  }
return r
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt2 = function(x) {
  if (x <= 1) {
      return x
    }
    let left = 1
    let right = x - 1
    while (true) {
      let mid = Math.floor(left + (right - left) / 2)
      if (mid * mid > x) {
        right = mid - 1
      } else {
        if ((mid + 1) * (mid + 1) > x) {
          return mid
        }
        left = mid + 1
      }
    }
};

/**
 * 折半查找
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) {
      return x
  }
  let t = Math.floor(x / 2)
  while (t) {
      if (x < t * t) {
        t = Math.floor(t / 2)
      } else if (x >= (t + 1) * (t + 1)) {
        t++
      } else {
        return t
      }
  }
  return t
};