/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var isMirror = function(t1, t2) {
  if (t1 === null && t2 === null) {
      return true
  }
  if (t1 === null || t2 === null) {
      return false
  }
  return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
}
/**
* @param {TreeNode} root
* @return {boolean}
*/
var isSymmetric1 = function(root) {
  return isMirror(root, root)
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric2 = function(root) {
  let nodeArr = [root, root]
  while (nodeArr.length) {
      let t1 = nodeArr.pop()
      let t2 = nodeArr.pop()
      if (!t1 && !t2) {
          continue
      }
      if (!t1 || !t2) {
          return false
      }
      if (t1.val !== t2.val) {
          return false
      }
      nodeArr.push(t1.left)
      nodeArr.push(t2.right)
      nodeArr.push(t1.right)
      nodeArr.push(t2.left)
  }
  return true
};