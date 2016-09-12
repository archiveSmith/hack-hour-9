/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return undefined;
  }
  delete this.storage[this.index - 1];
  this.index--
    return this.index;
};

let stack = new Stack;
stack.push(1);
stack.pop();
console.log(stack.pop());

console.log(stack);

/**
 * Queue Class
 */

function Queue() {
  this.storage = {};
  this.index = 0;
}

Queue.prototype.enqueue = function(val) {
  this.storage[this.index] = val;
  this.index++;
  return this.index;
};

Queue.prototype.dequeue = function() {
  delete this.storage[0];
  let counter = 0;
  for (var key in this.storage) {
    this.storage[counter] = this.storage[counter + 1]
    counter++;
  }
  delete this.storage[counter];
  this.index--;
  return this.index;
};

// let q = new Queue();

// console.log(q.enqueue(1))
// console.log(q.enqueue(2))
// console.log(q.enqueue(3))
// console.log(q.dequeue());
// console.log(q);

module.exports = { Stack: Stack, Queue: Queue };