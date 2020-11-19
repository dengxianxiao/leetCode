/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * 递归
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let postIndex
  const inMap = new Map()
  const helper = (inLeft, inRight) => {
      if (inLeft > inRight) {
          return null
      }

      // 以后续遍历当前节点为根节点
      const rootVal = postorder[postIndex]
      const root = new TreeNode(rootVal)

      // 跟节点 - 1
      postIndex--

      // 中序遍历中的跟节点位置，左右即为左右子数
      const rootIndex = inMap.get(rootVal)

      // 构建右子数，后序遍历从后往前，会先获取右子数
      root.right = helper(rootIndex + 1, inRight)
      // 构建左子数
      root.left = helper(inLeft, rootIndex - 1)
      return root
  }

  postIndex = postorder.length - 1
  inorder.forEach((val, index) => {
      inMap.set(val, index)
  })
  return helper(0, inorder.length - 1)
};
