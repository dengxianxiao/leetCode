/**
 * 234. 回文链表
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
      return true
  }
  let slow = head
  let fast = head.next
  let curr = null
  let prev = null
  // 反转前半部分链表
  while (slow && fast && fast.next) {
      curr = slow
      slow = slow.next
      fast = fast.next.next
      curr.next = prev
      prev = curr
  }
  let p2 = slow.next
  slow.next = prev
  // 个数为奇数时，最后fast为空，show减掉一位
  let p1 = fast === null ? slow.next: slow
  while(p1) {
      if(p1.val !== p2.val) {
          return false
      }
      p1 = p1.next
      p2 = p2.next
  }
  return true
};
