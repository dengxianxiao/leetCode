/**
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */



function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 迭代
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null
  let curr = head
  while (curr) {
      let tmp = curr.next
      curr.next = prev
      prev = curr
      curr = tmp
  }
  return prev
};

/**
 * 递归
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
  if (head == null || head.next == null) return head
  let p = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return p
};

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

reverseList2(n1)
