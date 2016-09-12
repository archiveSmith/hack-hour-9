/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(item) {
  return this.storage.push(item);
}

Stack.prototype.pop = function() {
  return this.storage.pop();
}


/**
* Queue Class
*/


function Queue() {
  this.storage = new Stack();
  this.workspace = new Stack();
}

Queue.prototype.enqueue = function(item) {
  this.storage.push(item);
}

Queue.prototype.dequeue = function() {
  // Move all of the items in this.storage
  // over to this.workspace, in reverse order
  let currentItem = this.storage.pop();
  while (currentItem !== undefined) {
    this.workspace.push(currentItem);
    currentItem = this.storage.pop();
  }

  // Pop off the top element in this.workspace
  const result = this.workspace.pop();

  // Move the rest of the elements back to this.storage
  currentItem = this.workspace.pop();
  while (currentItem !== undefined) {
    this.storage.push(currentItem);
    currentItem = this.workspace.pop();
  }

  return result;
}

module.exports = {Stack: Stack, Queue: Queue};
