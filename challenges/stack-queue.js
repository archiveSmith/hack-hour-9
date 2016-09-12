/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.store = {};
  this.length = 0;
}

Stack.prototype.push = function push(value) {
  this.store[this.length] = value;
  this.length += 1;
};

Stack.prototype.pop = function pop() {
  if (this.length > 0) {
    const temp = this.store[this.length - 1];
    delete this.store[this.length - 1];
    this.length--;
    return temp;
  }
  return undefined;
};


/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function enqueue(value) {
  this.in.push(value);
};

Queue.prototype.dequeue = function dequeue() {
  if (this.out.length === 0) {
    if (this.in.length === 0) {
      return undefined;
    }
    while (this.in.length > 0) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};


module.exports = { Stack, Queue };
