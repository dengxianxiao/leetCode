/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            
            if (grid[i][j] === 1) {
                //left
                if (i === 0 || (i !== 0 && grid[i-1][j] === 0)) {
                    perimeter++;
                } 
                //top
                if (j === 0 || (j !== 0 && grid[i][j-1] === 0)) {
                    perimeter++;
                }
                //right
                if (i === grid.length - 1 || (i !== grid.length - 1 && grid[i + 1][j] === 0)) {
                    perimeter++;
                }
                //bottom
                if (j === grid[i].length - 1 || (j != grid[i].length - 1 && grid[i][j+1] === 0)) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};