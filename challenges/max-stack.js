/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stackLength = 0;
  this.stack = {};
}

Stack.prototype.push = function(value){
  this.stack[this.stackLength] = value;
  this.stackLength++;
  return this.stackLength;
}

Stack.prototype.pop = function(){
  let returnValue = this.stack[this.stackLength-1];
  delete this.stack[this.stackLength-1];
  this.stackLength--;
  return returnValue
}

Stack.prototype.getMax = function(){
  let largestValue = 0;

  for (let key in this.stack){
    if (this.stack[key] > largestValue){
      largestValue = this.stack[key];
    }
  }
  return largestValue;
}

let myStack = new Stack();
myStack.push(5);
myStack.push(6);
myStack.push(7);

console.log(myStack);

console.log(myStack.pop());
console.log(myStack)
console.log(myStack.getMax());

module.exports = Stack;
