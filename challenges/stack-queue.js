/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  let removed = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return removed;
};

/**
* Queue Class
*/


function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}
Queue.prototype.enqueue = function(value) {
  this.inbox.push(value)
  return value;
}
Queue.prototype.dequeue = function() {
  if(this.outbox.index === 0) {
    if(this.inbox.index === 0) return undefined;
    while(this.inbox.index > 0) {
      this.outbox.push(this.inbox.pop())
    }
  }
  return this.outbox.pop();
}
module.exports = {Stack: Stack, Queue: Queue};
