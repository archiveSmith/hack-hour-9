/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = new Array();
  this.index = 0;
  this.max;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  if (!this.max || value > this.max) this.max = value;
  return this.index;
}

Stack.prototype.pop = function() {
  if (!this.index) return undefined;
  let poppedValue = this.storage[--this.index];
  delete this.storage[this.index];

  if (poppedValue === this.max) {
    this.max = -Infinity;
    for (let i = 0; i < this.index; i++) {
      if (this.storage[i] > this.max) this.max = this.storage[i];
    }
  }

  return poppedValue;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;