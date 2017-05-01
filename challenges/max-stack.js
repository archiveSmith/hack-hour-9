/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.items = {};
  this.length = 0;
  this.max = { index: 0, val: -Infinity };
}
Stack.prototype.push = (item) => {
  this.items[this.length] = item;
  if (item > this.max.val) {
  this.max = { index: length, val: item}
  return this.length++;
};
Stack.prototype.pop = () => {
  if (this.length > 0) {
    const item = this.items[--this.length];
    delete this.items[this.length];
    if (item === this.max.val) {
      let max = { index: 0, val: -Infinity };
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > max) {
          max = { index: i, val: this.items[i] };
        }
      }
      this.max = max;
    }
    return item;
  }
  return undefined;
};
Stack.prototype.getMax = () => { return this.length ? this.max.val : undefined; };

  module.exports = Stack;
