/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 437. 路径总和 III
 *
 * 该问题可分解为多个从根部计算求和的问题
 * 把每个子节点当做跟节点递归计算即可
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0
    }
    return paths(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var paths = function (node, sum) {
    if (!node) {
        return 0
    }
    let res = 0
    if (node.val === sum) {
        res += 1
    }
    res += paths(node.left, sum - node.val)
    res += paths(node.right, sum - node.val)
    return res
}
