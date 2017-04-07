/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve 
 * the maximum value from the stack in O(1) time.
 */

function Stack1() {
  this.values = [];
}

Stack1.prototype.push = function (value) {
  this.values.push(value);
};

Stack1.prototype.pop = function () {
  this.values.pop();
};
Stack1.prototype.getMax = function () {
  let max = -Infinity;
  for (let i = 0; i < this.stack.length; i += 1) {
    if (this.stack[i] > max) max = this.stack[i];
  }
  return max;
};
// O(n) time for getMax 

function Stack2() {
  this.values = [];
}
Stack2.prototype.push = function (value) {
  this.values[this.values.length] = value;
};
Stack2.prototype.pop = function () {
  const lastIndex = this.stack.length - 1;
  let value = this.stack[lastIndex];
  delete this.stack[lastIndex];
  this.stack.length--;
  return value;
};
Stack2.prototype.getMax = function () {
  let max = this.stack.length[0];
  for (let i = 1; i < this.stack.length; i += 1) {
    if (this.stack[i] > max) max = this.stack[i];
  }
  return max;
};


function Stack3() {
  this.stack = [];
  this.maxStack = [];
}
Stack3.prototype.push = function (value) {
  let max;
  if (!this.maxStack.length || value > this.maxStack[this.maxStack.length - 1]) {
    max = value;
  } else {
    max = this.maxStack[this.maxStack - 1];
  }
  return this.maxStack.push(max);
};
Stack3.prototype.pop = () => {
  this.maxStack.pop();
  return this.stack.pop();
};
Stack3.prototype.getMax = () => {
  return this.maxStack[this.maxStack.length - 1]
};




module.exports = Stack;
