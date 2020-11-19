/**
 *
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。



例如：

输入: 原始二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) {
      return root
  }
  const result = []
  const arr = []
  let pNode = root
  let sum = 0
  while (pNode || arr.length) {
      if (pNode) {
          // 遍历右子树
          arr.push(pNode)
          pNode = pNode.right
      } else {
          // 遍历左子数
          pNode = arr.pop()
          result.push(pNode.val)
          sum += pNode.val
          pNode.val = sum
          pNode = pNode.left
      }
  }
  return root
};

/**
 * 遍历
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  dfs(root, 0)
  return root
};

var dfs = function (root, sum) {
  if (!root) return sum
  const right = dfs(root.right, sum)
  const left = dfs(root.left, root.val + right)
  root.val = root.val + right
  return left
}
