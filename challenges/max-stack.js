/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arr = [];
  this.push = function (val) {
    this.arr[this.arr.length] = val;
    return this.arr.length;
  };

  this.pop = function () {
    let output = this.arr[this.arr.length - 1]
    this.arr.length = this.arr.length - 1;
    return output;
  };

  this.getMax = function () {
    let output = this.arr[0];

    for (var index = 1; index < this.arr.length; index++) {
      if (output < this.arr[index]) {
        output = this.arr[index]
      }
    }
    return output
  }

};

let stackTest = new Stack;

module.exports = Stack;