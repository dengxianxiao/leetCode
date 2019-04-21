/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 新建第三个节点存放l1,l2两个合并的节点
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function(l1, l2) {
  if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }
    let l3 = new ListNode(0)
    let node = l3
    while (l1 && l2) {
      if (l1.val < l2.val) {
        node.next = l1
        l1 = l1.next
      } else {
        node.next = l2
        l2 = l2.next
      }
      node = node.next
    }
    node.next = l1 || l2 // 剩余l1 或 l2 不为空
    return l3.next
};

/**
 * 递归实现
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists2 = function(l1, l2) {
  if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  }
};

/**
 * 将l2 合并进 l1
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }
  // 保证l1首节点最小
    if (l1.val > l2.val) {
      let tmp = l1
      l1 = l2
      l2 = tmp
    }
    let tmpL1 = l1 // 临时变量用于迭代，l1处于头指针用于返回
    while (tmpL1 && l2) {
      if (l2.val >= tmpL1.val && tmpL1.next && l2.val < tmpL1.next.val) {
        // 找到位置，将l2节点放入tmpL1
        let node = new ListNode(l2.val)
        node.next = tmpL1.next
        tmpL1.next = node

        tmpL1 = tmpL1.next // tmpL1指向刚放入的数
        l2 = l2.next // l2指向下一个数
      } else {
        // tmpL1 指向下一个数
        if (tmpL1.next) {
          tmpL1 = tmpL1.next
        } else {
          // l1 已经到尾节点，l2还有值
          tmpL1.next = l2
            break
        }
      }
    }
      
    return l1
};