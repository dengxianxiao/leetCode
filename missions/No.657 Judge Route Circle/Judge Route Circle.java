/**
 *
 * Description: 
 * 
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
 *  judge if this robot makes a circle, which means it moves back to the original place.
 *
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

class Solution {
    public boolean judgeCircle(String moves) {
        String[] arr = moves.split("");
        int x = 0;
        int y = 0;
        for(String step : arr) {
            switch(step) {
                case "U": y++;break;
                case "D": y--;break;
                case "R": x++;break;
                case "L": x--;break;
            }
        }
        return (x == 0 && y == 0);
    }

    /**
     * moves=" " + moves + " ";
     *  return moves.split("L").length==moves.split("R").length 
     *      && moves.split("U").length == moves.split("D").length;
     */
}
