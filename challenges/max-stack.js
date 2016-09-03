/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.values = [];
  this.max = undefined;
}

Stack.prototype.push = function(value) {
  if (!this.max || value > this.max) this.max = value;

  this.values.push(value);
  return this.values.length;
}

Stack.prototype.pop = function() {
  const popped = this.values.pop();

  if (popped === this.max) {
    this.max = -Infinity;
    this.values.forEach(number => {
      if (number > this.max) this.max = number;
    });
  }

  return popped;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;
