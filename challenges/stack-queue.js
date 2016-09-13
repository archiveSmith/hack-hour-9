/**
 * Create a stack. Then create a queue using two stacks.
 */

function Stack() {
  this.storage = new Array();
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index++] = value;
  return this.index;
};

Stack.prototype.pop = function () {
  if (!this.index) return undefined;
  const poppedValue = this.storage[--this.index];
  delete this.storage[this.index];
  return poppedValue;
};

/**
* Queue Class
*/

function Queue() {
  this.storage1 = new Stack();
  this.storage2 = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.storage1.push(value);
  return this.storage1.index;
};

Queue.prototype.dequeue = function () {
  if (!this.storage1.index && !this.storage2.index) return undefined;
  if (!this.storage2.index) {
    while (this.storage1.index) {
      this.storage2.push(this.storage1.pop());
    }
  }
  return this.storage2.pop();
};

// module.exports = { Stack, Queue };
