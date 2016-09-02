/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(arr) {
  this.contents[this.length] = arr;
  this.length++;
};

Stack.prototype.pop = function() {
  let deletedValue = this.contents[this.length-1];
  delete deletedValue;
  if (deletedValue !== undefined) this.length--;
  return deletedValue;
};

Stack.prototype.getMax = function() {
  let max = -Infinity;
  for (let key in this.contents) {
  	if (this.contents[key] > max) {
      max = this.contents[key];
    }
  }
  return max;
};

module.exports = Stack;