/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.list = []
  this.map = new Map()
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) {
      return false
  }
  this.list.push(val)
  this.map.set(val, this.list.length - 1)
  return true
};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
      return false
  }
  const lastIndex = this.list.length - 1
  const lastVal = this.list[lastIndex]
  const index = this.map.get(val)
  this.map.set(lastVal, index)
  this.list[index] = lastVal
  this.map.delete(val)
  this.list.pop()
  return true
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  if (!this.list.length) {
      return false
  }
  const index = Math.floor(Math.random() * (this.list.length - 1))
  return this.list[index]
};

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
