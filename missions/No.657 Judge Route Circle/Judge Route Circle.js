/**
 *
 * Description: 
 * 
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
 *  judge if this robot makes a circle, which means it moves back to the original place.

 * The move sequence is represented by a string. And each move is represent by a character.
 * The valid robot moves are R (Right), L (Left), U (Up) and D (down).
 *  The output should be true or false representing whether the robot makes a circle.
 *
 * Example 1:
 * Input: "UD"
 * Output: true
 *
 * Example 2:
 * Input: "LL"
 * Output: false
 * 
 */

/**
 * 思路： 假设初始位置为原点，向右 y+1，向左 y-1，向上 y+1，向下 y-1
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var arr = moves.split('');
    var x = 0;
    var y = 0;
    arr.forEach(step => {
        switch(step) {
            case "U": y++;break;
            case "D": y--;break;
            case "R": x++;break;
            case "L": x--;break;
        }
    })
    return (x === 0 && y === 0);
};