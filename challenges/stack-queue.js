/**
 * Create a stack.Then create a queue using two stacks.
 */


// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }
// Stack.prototype.push = function (val) {
//   this.storage[this.index++] = val;
// }

// Stack.prototype.pop = function () {
//   if (this.storage.length){
//     const popped = this.storage[this.index-1];
//     delete this.storage[this.index-1];
//     this.index--;
//     return popped;
//   } else {
//     return undefined;
//   }
  
// }

/**
* Queue Class
*/
function Queue() {
  this.inbox = [];
  this.outbox = [];
}
Queue.prototype.queue = function(val){
  this.inbox.push(val);
}
Queue.prototype.dequeue = function () {
  let popped;
  if(!this.outbox.length){
    if(!this.inbox.length){
      return undefined;
    }
    while (this.inbox.length){
      popped = this.inbox.pop();
      this.outbox.push(popped);
    }
  }
  return this.outbox.pop();
  }


module.exports = {Stack: Stack, Queue: Queue};
