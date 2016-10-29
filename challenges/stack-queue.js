/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  let result = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return result;
};

/**
* Queue Class
*/


function Queue() {
  this.stack1 = {};
  this.stack2 = {};
  this.index = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  let result = {};
  let first = this.storage[0];

  for (let key in this.storage) {
    result[this.index] = this.storage[key]
  }
  this.index--;

  this.storage = result;
  return first;
};

module.exports = {Stack: Stack, Queue: Queue};
