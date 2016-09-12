/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  this.contents = [];
}

Stack.prototype.push = function (value) {
  this.contents.push(value);
};

Stack.prototype.pop = function () {
  return this.contents.pop();
};
/**
* Queue Class
*/
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.in.push(value);
};

Queue.prototype.dequeue = function () {
  let output = this.out.pop();
  if (output === undefined) {
    let currentItem = this.in.pop();
    while (currentItem !== undefined) {
      this.out.push(currentItem);
      currentItem = this.in.pop();
    }
    output = this.out.pop();
  }
  return output;
};


// tests
// const queue = new Queue();
// for (let j = 0; j < 2; j++) {
//   queue.enqueue(j);
// }

// console.log('queue', queue);
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue.deQueue());


module.exports = { Stack: Stack, Queue: Queue };
