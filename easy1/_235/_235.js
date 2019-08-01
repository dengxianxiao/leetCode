/**
 * 235. 二叉搜索树的最近公共祖先
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

 */

/**
 *
二叉搜索树（BST）的性质：

节点 NN 左子树上的所有节点的值都小于等于节点 NN 的值
节点 NN 右子树上的所有节点的值都大于等于节点 NN 的值
左子树和右子树也都是 BST

算法

从根节点开始遍历树
如果节点 pp 和节点 qq 都在右子树上，那么以右孩子为根节点继续 1 的操作
如果节点 pp 和节点 qq 都在左子树上，那么以左孩子为根节点继续 1 的操作
如果条件 2 和条件 3 都不成立，这就意味着我们已经找到节 pp 和节点 qq 的 LCA 了

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
 * 迭代
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let pVal = p.val
  let qVal = q.val
  let node = root
  while (node) {
      let rootVal = node.val
      if (pVal < rootVal && qVal < rootVal) {
          node = node.left
      } else if (pVal > rootVal && qVal > rootVal) {
          node = node.right
      } else {
          return node
      }
  }
};
/**
 * 递归
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let rootVal = root.val
  let pVal = p.val
  let qVal = q.val
  if (pVal < rootVal && qVal < rootVal) {
      return lowestCommonAncestor(root.left, p, q)
  } else if (pVal > rootVal && qVal > rootVal) {
      return lowestCommonAncestor(root.right, p, q)
  } else {
      return root
  }
};
