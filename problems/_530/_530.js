/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 530. 二叉搜索树的最小绝对差
 * //二叉查找树中，中间节点的值一定是其左右节点值的中间数，因此最小差别一定是在中间节点与左右节点之间
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min
  let prev
  var getMin = function (root) {
      if (!root) {
          return
      }
      getMin(root.left)
      if (prev) {
          if (min) {
              min = Math.min(min, root.val - prev.val)
          } else {
              min = root.val - prev.val
          }
      }
      prev = root
      getMin(root.right)
  }
  getMin(root)
  return min
};
