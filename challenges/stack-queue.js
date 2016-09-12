/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  this.length = 0;
  this.empty = -1;
  this.contents = {};
}

Stack.prototype.push = function (value) {
  this.contents[this.length] = value;
  this.length++;
  this.empty++;
};

Stack.prototype.pop = function () {
  if (this.empty === -1) {
    return undefined;
  }
  const output = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length--;
  this.empty--;
  return output;
};
/**
* Queue Class
*/
function Queue() {
  this.length = 0;
  this.empty = -1;
  this.nextOut = 0;
  this.contents = {};
}

Queue.prototype.enqueue = function (value) {
  this.contents[this.length] = value;
  this.length++;
  this.empty++;
};

Queue.prototype.dequeue = function () {
  if (this.empty === -1) {
    return undefined;
  }
  const output = this.contents[this.nextOut].pop();
  if (output === undefined) {
    this.nextOut++;
    this.empty--;
    return this.deQueue();
  }
  return output;
};


// tests
// const stack1 = new Stack();
// const stack2 = new Stack();
// for (let i = 0; i < 3; i++) {
//   stack1.push(i);
//   stack2.push(i);
// }

// console.log(stack1, stack2);

// const queue = new Queue();
// queue.enqueue(stack1);
// queue.enqueue(stack2);

// console.log('queue', queue);
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());


module.exports = { Stack: Stack, Queue: Queue };
