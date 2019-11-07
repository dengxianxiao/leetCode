/**
 * 404. 左叶子之和
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) {
      return 0
  }
  let arr = [root]
  let sum = 0
  while (arr.length) {
      let node = arr.pop()
      if (node.left) {
          arr.push(node.left)
          if (!node.left.left && !node.left.right) {
              sum += node.left.val
          }
      }
      if (node.right) {
          arr.push(node.right)
      }
  }
  return sum
};
