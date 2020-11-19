/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
      this.val = val
      this.next = null
  }

/**
 * 双指针法，把链表A和B拼接起来, 这样大家的长度都是(lenA+lenB), 后端就对齐了.
 * 时间复杂度O(m + n)
 * 空间复杂度O(1)
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let nodeA = headA
  let nodeB = headB
  while (nodeA !== nodeB) {
    // A结束指向B，B结束指向A，相当于把两个链表拼接起来
    nodeA = nodeA === null ? headB : nodeA.next
    nodeB = nodeB === null ? headA : nodeB.next
  }
  return nodeA
};

/**
 * 先遍历A放到数组中，再遍历B判断是否在A的数组中
 * 时间复杂度O(m + n)
 * 空间复杂的O(m)
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
      return null
  }
  let nodeArr = []
  let nodeA = headA
  let nodeB = headB
  while (nodeA) {
      nodeArr.push(nodeA)
      nodeA = nodeA.next
  }
  while (nodeB) {
      if (nodeArr.includes(nodeB)) {
          return nodeB
      }
      nodeB = nodeB.next
  }
  return null
};

/**
 * 双层循环，复杂度m*n, 最慢
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
      return null
  }
  let nodeA = headA
  while (nodeA) {
      let nodeB = headB
      while (nodeB) {
          if (nodeA === nodeB) {
              return nodeA
          }
          nodeB = nodeB.next
      }
      nodeA = nodeA.next
  }
  return null
};

// listA = [2,6,4], listB = [1,4]

let n1 = new ListNode(2)
let n2 = new ListNode(6)
let n3 = new ListNode(4)
n1.next = n2
n2.next = n3

let m1 = new ListNode(1)
m1.next = n3

getIntersectionNode(n1, m1)
