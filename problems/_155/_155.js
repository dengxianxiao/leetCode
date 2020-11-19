/**
 * 155. 最小栈
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

 */

 /**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.i = 0
  if (this.constructor !== MinStack) {
      return new MinStack()
  }
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack[this.i] = x
  this.i++
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.i--
  return this.stack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.i - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (!this.i) {
      return
  }
  let min = this.stack[0]
  for (let j = 1; j < this.i; j++) {
      if (this.stack[j] < min) {
          min = this.stack[j]
      }
  }
  return min
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
