/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let curNode = head
  while (curNode && curNode.next) {
      if (curNode.val === curNode.next.val) {
          curNode.next = curNode.next.next
      } else {
          curNode = curNode.next
      }
  }
  return head
};