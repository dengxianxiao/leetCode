/**
 *
 * 给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 3叉树 :


 

我们应返回其最大深度，3。

说明:

树的深度不会超过 1000。
树的节点总不会超过 5000。

 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
      return 0
  }
  let depth = 0
  const arr = [
      {
          node: root,
          depth: 1
      }
  ]
  while (arr.length) {
      const nodeObj = arr.pop()
      const node = nodeObj.node
      depth = Math.max(depth, nodeObj.depth)
      if (node.children && node.children.length) {
          node.children.forEach(c => {
              arr.push({
                  node: c,
                  depth: nodeObj.depth + 1
              })
          })
      }
  }
  return depth
}


/**
 * 递归
 * @param {Node} root
 * @return {number}
 */
var maxDepth1 = function(root) {
  if (!root) {
      return 0
  } else if (!root.children.length) {
      return 1
  } else {
      const arr = []
      root.children.forEach(node => arr.push(maxDepth(node)))
      arr.sort((a, b) => b - a)
      return arr[0] + 1
  }
};
