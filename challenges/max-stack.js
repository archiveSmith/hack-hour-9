/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Stack() {
  // body...
  this.store = {};
  this.index = 0;
  this.greatest = -Infinity;
}

Stack.prototype.push = (val) => {
  this.store[this.index] = val;
  this.index++;
  if (val > this.greatest) {
    this.greatest = val;
  }
  return this.index;
};

Stack.prototype.pop = () => {
  if (this.index === 0) {
    return undefined;
  }
  const deleted = this.store[this.index - 1];
  delete this.store[this.index - 1];
  this.index--;
  if (deleted === this.greatest) {
    const arr = Object.keys(this.store).map((key) => this.store[key]);
    this.greatest = Math.max(...arr);
  }
  return deleted;
};

Stack.prototype.getMax = () => {
  if (this.index === 0) {
    return undefined;
  }
  return this.greatest;
};

module.exports = Stack;
