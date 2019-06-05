/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * DFS 深度优先搜索
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let nodes = []
  let nums = []
  if (!root) {
      return nums
  }
  nodes.push(root)
  while (nodes.length) {
      let len = nodes.length
      let subNums = []
      for (let i = 0; i < len; i++) {
          if (nodes[0].left) {
              nodes.push(nodes[0].left)
          }
          if (nodes[0].right) {
              nodes.push(nodes[0].right)
          }
          subNums.push(nodes.shift().val)
      }
      nums.unshift(subNums)
  }
  return nums
};
