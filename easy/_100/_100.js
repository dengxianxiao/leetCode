/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归实现
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p && q) {
      return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
      return p === q
  }
};