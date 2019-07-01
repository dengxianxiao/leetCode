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
 * 遍历链表，判断是否已经遍历过
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
  if (!head) {
      return false
  }
  let nodeArr = []
  while (head) {
      if (nodeArr.includes(head)) {
          return true
      } else {
          nodeArr.push(head)
      }
      head = head.next
  }
  return false
};

/**
 * 定义两个指针nodeWalk, nodeRun
 * nodeWalk走一步，nodeRun走两步
 * 如果为环形链表，则两个指针会相遇
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
  if (!head) {
      return false
  }
  let nodeWalk = head
  let nodeRun = head
  while (nodeRun.next && nodeRun.next.next) {
      nodeWalk = nodeWalk.next
      nodeRun = nodeRun.next.next
      if (nodeWalk === nodeRun) {
          return true
      }
  }
  return false
};

/**
 * 定义两个指针nodeWalk, nodeRun
 * nodeWalk走一步，nodeRun走两步
 * 如果为环形链表，则两个指针会相遇
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle3 = function(head, pos) {
  if (!head || !head.next) {
      return false
  }
  let nodeWalk = head
  let nodeRun = head.next
  while (nodeWalk !== nodeRun) {
      if (!nodeRun || !nodeRun.next) {
          return false
      }
      nodeWalk = nodeWalk.next
      nodeRun = nodeRun.next.next
  }
  return true
};

let n1 = new ListNode(3)
let n2 = new ListNode(2)
let n3 = new ListNode(0)
let n4 = new ListNode(4)

n1.next = n2
n2.next = n3
n3.next = n4

hasCycle(n1)
