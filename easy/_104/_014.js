/**
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
var maxDepth1 = function(root) {
  if (!root) {
      return 0
  }
  let maxLeft = maxDepth(root.left)
  let maxRight = maxDepth(root.right)
  return Math.max(maxLeft, maxRight) + 1
};

/**
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
var maxDepth2 = function(root) {
  let stack = []
  if (root) {
      stack.push([1, root])
  }
  let depth = 0
  while (stack.length) {
      let current = stack.pop()
      let currentDepth = current[0]
      root = current[1]
      if (root) {
          depth = Math.max(depth, currentDepth)
          stack.push([currentDepth + 1, root.left])
          stack.push([currentDepth + 1, root.right])
      }
  }
  return depth
};