/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 501. 二叉搜索树中的众数
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  if (!root) {
      return []
  }
  let map = new Map()
  let nodeArr = [root]
  while (nodeArr.length) {
      let node = nodeArr.pop()
      if (map.get(node.val)) {
          map.set(node.val, map.get(node.val) + 1)
      } else {
          map.set(node.val, 1)
      }
      if (node.left) {
          nodeArr.push(node.left)
      }
      if (node.right) {
          nodeArr.push(node.right)
      }
  }
  let result = new Set()
  let max = Math.max(...map.values())
  for (let [key, val] of map) {
      if (val === max) {
          result.add(key)
      }
  }
  return [...result]
};
