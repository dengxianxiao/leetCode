/**
 *
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 迭代
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements1 = function(head, val) {
  let node = head
  let prevNode = null
  let currRemove = false
  while (node) {
      currRemove = false
      if (node.val === val) {
          currRemove = true
          if (prevNode) {
              prevNode.next = node.next
          } else {
              // 移除头部节点
              head = node.next
          }
      }
      // 移除当前值，则prevNode不变
      prevNode = currRemove ? prevNode : node
      node = node.next
  }
  return head
};


/**
 * 递归
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements2 = function(head, val) {
  if (!head) return null
  head.next = removeElements2(head.next, val)
  // 逆序比较
  return head.val === val ? head.next : head
};

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(6)
let n5 = new ListNode(4)
let n6 = new ListNode(5)
let n7 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = n7

removeElements2(n1)
