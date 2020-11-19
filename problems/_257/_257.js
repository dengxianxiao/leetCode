/**
 *
 * 257. 二叉树的所有路径
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。

  说明: 叶子节点是指没有子节点的节点。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * 深度优先遍历，迭代
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths1 = function(root) {
    let paths = []
    if (!root) {
        return paths
    }
    let nodeArr = [root]
    let pathArr = [root.val + '']
    while (nodeArr.length) {
      let node = nodeArr.pop()
      let path = pathArr.pop()
      if (node.right) {
          nodeArr.push(node.right)
          pathArr.push(path + '->' + node.right.val)
      }
      if (node.left) {
          nodeArr.push(node.left)
          pathArr.push(path + '->' + node.left.val)
      }
      if (!node.left && !node.right) {
          paths.push(path)
      }
    }
    return paths
};


var getPaths = function (node, path, paths) {
  if (node) {
      path = path + '->' + node.val
      if (!node.left && !node.right) {
          paths.push(path)
      } else {
          getPaths(node.right, path, paths)
          getPaths(node.left, path, paths)
      }
  }
}
/**
 * 递归
 *  时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {TreeNode} root
 * @return {string[]}
*/
var binaryTreePaths = function(root) {
  let paths = []
  getPaths(root, '', paths)
  return paths
};

var n1 = new TreeNode(1)
var n2 = new TreeNode(2)
var n3 = new TreeNode(3)
var n4 = new TreeNode(5)

n1.left = n2
n1.right = n3
n2.left = null
n2.right = n4

binaryTreePaths(n1)
