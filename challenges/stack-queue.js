/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  // by definition, a stack data structure is FILO = first in last out

  // using an array structure as internal data storage
  this.data = [];

  // tracks length of stack
  this.length = 0;

  // using the array built-in pop() - returns the element just popped off
  this.pop = function() {
    this.length--;
    return this.data.pop();
  }

  // using the array built-in push() - returns the new length of array
  this.push = function(val) {
    this.length++;
    return this.data.push(val);
  }

}


/**
* Queue Class
*/
function Queue() {
  // by definition, a queue data structure is FIFO = first in first out

  this.dataStack = new Stack();
  this.helperStack = new Stack();

  // adds to end of queue - returns new length of queue
  this.enqueue = function(val) {
    return this.dataStack.push(val);
  }

  // removes element from beginning of queue - returns the removed element
  this.dequeue = function() {
    // in order to remove FIRST element - calculate number of items to pop off and push onto helper stack
      // count = dataStack length - 1
    var count = this.dataStack.length - 1;

    for(var i = 0; i < count; i++) {
      this.helperStack.push(this.dataStack.pop());
    }
  
    // pop off beginning element
    var output = this.dataStack.pop();

    // pop off helper stack and push back to dataStack
    count = this.helperStack.length;
    for(var j = 0; j < count; j++) {
      this.dataStack.push(this.helperStack.pop());
    }
    
    return output;
  }

}

/* tests */
/*
var stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.data);
console.log(stack1.length);
console.log(stack1.pop());
console.log(stack1.data);
console.log(stack1.length);
*/
/*
var q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log(q1.dataStack);
console.log(q1.dequeue());
console.log(q1.dataStack);
*/

module.exports = {Stack: Stack, Queue: Queue};
