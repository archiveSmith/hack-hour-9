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
  this.cache = {};
  this.index = 0;
  this.dequeueIndex = 0;

  var inbox = new Stack();
  var outbox = new Stack();
}
Queue.prototype.enqueue = function(value) {
  inbox.
  this.cache[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  if (this.index === this.dequeueIndex){
    return undefined;
  } else{
    let poppedVar = this.cache[this.dequeueIndex];
    delete this.cache[this.dequeueIndex];
    this.dequeueIndex++;
    return poppedVar;
  }
};
module.exports = {Stack: Stack, Queue: Queue};
