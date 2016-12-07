/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
<<<<<<< HEAD
  this.storage = [];
  this.length = 0;
  this.max = Number.NEGATIVE_INFINITY

  this.push = function(value) {
    this.storage[this.length] = value;
    if( value > this.max) this.max = value;
    this.length++;
    return this.length;
  };

  this.pop = function() {
    return this.length === 0 ? undefined : this.storage[--this.length];
  };

  this.getMax = function() {
    return this.max
  };

=======
  // body...
>>>>>>> ff42f218227c1e5339b9e5019186e1b0316c24af
}

module.exports = Stack;