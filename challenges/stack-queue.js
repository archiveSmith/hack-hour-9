/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.set = {};
  this.index = 0;
}

Stack.prototype.push = function (val) {
  this.set[this.index] = val;
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index === 0) return undefined;
  this.index--;
  const tempVal = this.set[this.index];
  delete this.set[this.index];
  return tempVal;
};

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack);
// console.log(myStack.pop());
// console.log(myStack);
// myStack.push(4);
// console.log(myStack);

/**
* Queue Class
*/

function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}
//push everything to the front
Queue.prototype.enqueue = function(val) {
  if (this.outbox.index === 0){
    this.outbox.push(val);
  } else {
    this.inbox.push(val);
  }
}
//pop it off the back
Queue.prototype.dequeue = function() {
  if (this.outbox.index === 1) {
    return this.outbox.pop();
  } else {
    while (this.inbox.index > 0) {
      this.outbox.push(this.inbox.pop());
    }
    return this.outbox.pop();
  }
}

const myQu = new Queue();
myQu.enqueue(1);
myQu.enqueue(2);
myQu.enqueue(3);
console.log(myQu);
console.log(myQu.dequeue());
console.log(myQu);

module.exports = {Stack: Stack, Queue: Queue};
