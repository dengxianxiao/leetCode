/**
 * 108. 将有序数组转换为二叉搜索树
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

  本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

  示例:

  给定有序数组: [-10,-3,0,5,9],

  一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

        0
      / \
    -3   9
    /   /
  -10  5

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
      return null
  }
  let root = getNode(nums, 0, nums.length - 1)
  return root
};

/**
 *
 * @param {number[]} nums
 * @param {number} low
 * @param {number} hight
 * @returns {TreeNode}
 */
var getNode = function(nums, low, hight) {
  if (low > hight) {
      return null
  }
  // 也可以 mid = Math.floor((low + hight) / 2),但是在Java等有最大整数的语言中可能会导致数组越界
  let mid = Math.floor(low + (hight - low) / 2)
  let node = new TreeNode(nums[mid])
  node.left = getNode(nums, low, mid - 1)
  node.right = getNode(nums, mid + 1, hight)
  return node
}
