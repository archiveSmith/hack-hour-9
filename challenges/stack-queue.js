/**
 * Create a stack. Then create a queue using two stacks.
 */

function Stack() {
  this.storage = new Array();
  this.index = 0;
}

Stack.prototype.push = (value) => {
  this.storage[this.index++] = value;
  return this.index;
};

Stack.prototype.pop = () => {
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
  this.index = 0;
  this.dIndex = 0;
}

Queue.prototype.enqueue = (value) => {
  this.storage1.push(value);
  return ++this.index;
};

Queue.prototype.dequeue = () => {
  const dequeuedValue = this.storage1[this.index - this.dIndex];
  this.dIndex++;
  return dequeuedValue;
};

module.exports = { Stack, Queue };
