/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) {
      w--
  }
  return [area / w, w]
};

/**
 * 循环遍历，最慢
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let L = area
  let W = 1
  for (let i = 1; i <= area / 2; i++) {
      if (area % i === 0) {
          j = area / i
          if (Math.abs(j - i) < L - W) {
              if (j > i) {
                  L = j
                  W = i
              } else {
                  L = i
                  W = j
              }
          }
      }
  }
  return [L, W]
};
