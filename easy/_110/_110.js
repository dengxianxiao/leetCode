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
 * 递归求树节点的最大深度
 *
 * @param {TreeNode} node
 */
var depth = function(node) {
  if (!node)  {
      return 0
  }
  return Math.max(depth(node.left), depth(node.right)) + 1
}
/**
 * 判断一个树是否是平衡二叉树
 *
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced1 = function(root) {
  if (!root) {
      return true
  }
  let leftDepth = depth(root.left)
  let rightDepth = depth(root.right)

  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};


var dfsHeight = function (root) {
  if (!root) {
      return 0
  }
  let leftHeight = dfsHeight(root.left)
  let rightHeight = dfsHeight(root.right)
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1
  }
  return Math.max(leftHeight, rightHeight) + 1
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isBalanced2 = function(root) {
  return dfsHeight(root) !== -1
};



let n1 = new TreeNode(3)
let n2 = new TreeNode(9)
let n3 = new TreeNode(20)
let n4 = new TreeNode(15)
let n5 = new TreeNode(7)

n1.left = n2
n1.right = n3
n3.left = n4
n3.right = n5

isBalanced2(n1)
