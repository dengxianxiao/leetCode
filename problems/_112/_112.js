/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * 深度优先遍历，找到第一个叶子节点路径和等于sum，没找到则返回false
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum1 = function(root, sum) {
  if (!root) {
    return false
  }
  let currentSum = 0
  let nodeArr = [root]
  let sumArr = [sum - root.val]
  while (nodeArr.length) {
      root = nodeArr.pop()
      currentSum = sumArr.pop()
      if (!root.left && !root.right && currentSum === 0) {
        return true
      }
      if (root.right) {
        nodeArr.push(root.right)
        sumArr.push(currentSum - root.right.val)
      }
      if (root.left) {
        nodeArr.push(root.left)
        sumArr.push(currentSum - root.left.val)
      }
  }
  return false
};

/**
 * 深度优先遍历，递归
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum2 = function(root, sum) {
  if (!root) {
      return false
  }
  sum -= root.val
  if (!root.left && !root.right) {
      return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};

var n1 = new TreeNode(5)
var n2 = new TreeNode(4)
var n3 = new TreeNode(8)
var n4 = new TreeNode(11)
var n5 = new TreeNode(13)
var n6 = new TreeNode(4)
var n7 = new TreeNode(7)
var n8 = new TreeNode(2)
var n9 = new TreeNode(1)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = null
n3.left = n5
n3.right = n6
n4.left = n7
n4.right = n8
n6.left = null
n6.right = n9

hasPathSum(n1, 22)
