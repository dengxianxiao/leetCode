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
 * 深度优先遍历，递归
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth1 = function(root) {
  if (!root) {
      return 0
  }
  if (!root.left && !root.right) {
      return 1
  }
  let minValue = Number.MAX_VALUE
  if (root.left) {
      minValue = Math.min(minDepth(root.left), minValue)
  }
  if (root.right) {
      minValue = Math.min(minDepth(root.right), minValue)
  }
  return minValue + 1
};


/**
 * 深度优先遍历，迭代
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth2 = function(root) {
  if (!root) {
      return 0
  }
  let stack = [[root, 1]]
  let minValue = Number.MAX_VALUE
  while (stack.length) {
      let current = stack.pop()
      root = current[0]
      let currentDepth = current[1]
      if (!root.left &&　!root.right) {
          minValue = Math.min(currentDepth, minValue)
      }
      if (root.left) {
          stack.push([root.left, currentDepth + 1])
      }
      if (root.right) {
          stack.push([root.right, currentDepth + 1])
      }
  }
  return minValue
};


/**
 * 广度优先遍历，找到第一个左右子节点都为空的节点
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth3 = function(root) {
  if (!root) {
    return 0
  }
  let stack = [[root, 1]]
  let currentDepth = 0
  while (stack.length) {
      let current = stack.shift()
      root = current[0]
      currentDepth = current[1]
      if (!root.left && !root.right) {
          break
      }
      if (root.left) {
          stack.push([root.left, currentDepth + 1])
      }
      if (root.right) {
          stack.push([root.right, currentDepth + 1])
      }
  }
  return currentDepth
};

let n1 = new TreeNode(3)
let n2 = new TreeNode(9)
let n3 = new TreeNode(20)
let n4 = new TreeNode(15)
let n5 = new TreeNode(7)

n1.left = n2
n1.right = n3
n2.left = null
n2.right = null
n3.left = 15
n3.right = 7

minDepth3(n1)
