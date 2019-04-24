# 21. 合并两个有序链表

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

## 1. 新建第三个节点存放l1,l2两个合并的节点

```js
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
```

## 2. 递归实现

```js
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
```

## 3. 将l2 合并进 l1

```js
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
```