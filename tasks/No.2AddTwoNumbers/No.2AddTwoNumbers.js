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
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
  // 先求第一个数，创建根节点
  let n1
  let n2
  let _getValAndNext = function () {
    n1 = l1 ? l1.val : 0
    n2 = l2 ? l2.val : 0
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  _getValAndNext()
  let sum = n1 + n2
  let resultListNode = new ListNode(sum % 10) // 跟节点

  let carry = Math.floor(sum / 10) // 表示当前进位，如果有则与下一个数相加
  let currNode = resultListNode // 当前节点的临时变量，用于循环添加next
  // 循环创建剩下的节点
  while (l1 || l2) {
    _getValAndNext()
    sum = n1 + n2 + carry
    carry = Math.floor(sum / 10)
    currNode.next = new ListNode(sum % 10)
    currNode = currNode.next
  }
  // 最后一位可能进位
  if (carry > 0) {
    currNode.next = new ListNode(carry)
  }
  return resultListNode
}

// 测试用例
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

let l3 = new ListNode(1)
l3.next = new ListNode(0)
l3.next.next = new ListNode(0)
l3.next.next.next = new ListNode(1)
let l4 = new ListNode(5)
l4.next = new ListNode(6)
l4.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))


/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*
* 先求出两个整数再相加的方法，当超过最大正整数能表达的值时就不能用了
*/
var addTwoNumbers_error = function(l1, l2) {
let n1 = 0
let n2 = 0
let i = 1
// 先求出两个整数相加
while (l1) {
    n1 = n1 + l1.val * i
    l1 = l1.next
    i *= 10
}
i = 1
while (l2) {
    n2 = n2 + l2.val * i
    l2 = l2.next 
    i *= 10
}
let sum = n1 + n2

// 将和转换为链表返回
let sumArr = sum.toString().split('')
let len = sumArr.length
let resultListNode = new ListNode(Number(sumArr[len - 1]))
let currNode = resultListNode
while (len >= 2) {
  currNode.next = new ListNode(Number(sumArr[len - 2]))
  currNode = currNode.next
  len -= 1
}
return resultListNode
}