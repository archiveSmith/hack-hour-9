/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  if (this.storage[0] === undefined) {
    this.index++;
    this.storage[this.index] = value;
  } else {
    this.storage[this.index] = value;
  }
  return this.index;
};

Stack.prototype.pop = function() {
  let returnVal = this.storage[this.index];
  delete this.storage[this.index];
  if (this.index > 0) {
    this.index--;
  }
  return returnVal;
};

/**
 * Queue Class
 */


function Queue() {
  this.stackIn = new Stack();
  this.stackOut = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.stackIn.push(value);
};


Queue.prototype.dequeue = function() {
  if (!Object.keys(this.stackOut.storage).length) {
    if (!Object.keys(this.stackIn.storage).length) {
      return undefined;
    }
    while (Object.keys(this.stackIn.storage).length) {
      this.stackOut.push(this.stackIn.pop());
      console.log(this.stackOut)
    }
  }
  return this.stackOut.pop();
};

module.exports = {
  Stack: Stack,
  Queue: Queue
};
