/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  var top = null;
  var count = 0;

  this.push = function(val) {
    var node = {
      val: val,
      next: null
    };
    node.next = top;
    top = node;
    count++;
    return count;
  }

  this.pop = function() {
    var out = top;
    top = top.next;
    if (count > 0) {
      count--;
    }
    return out.val;
  }

  this.getMax = function() {
    if (count === 1) {
      return top.val;
    }
    if (!top) {
      return undefined;
    }
    console.log(count)
    var greatest = 0;
    while (count > 0 && top.next !== null) {
      if (top.val < top.next.val) {
        greatest = top.next;
      }
      top = top.next;
      count--;
    }

    return greatest.val;
  }
}


module.exports = Stack;
