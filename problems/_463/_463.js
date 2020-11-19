/**
 * 463. 岛屿的周长
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0
  for (let i = 0, len1 = grid.length; i < len1; i++) {
      for (let j = 0, len2 = grid[i].length; j < len2; j++) {
          if (grid[i][j] === 1) {
              // 左边的值
              if (i === 0 || grid[i - 1][j] === 0) {
                  perimeter++
              }
              // 上面的值
              if (j === 0 || grid[i][j - 1] === 0) {
                  perimeter++
              }
          }
      }
  }
  return perimeter * 2
};
