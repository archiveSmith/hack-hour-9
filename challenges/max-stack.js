/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const stack = {};
  stack.items = {};
  stack.length = 0;
  stack.max = -Infinity;

  stack.push = (item) => {
    stack.items[stack.length++] = item;
    if (item > stack.max) { stack.max = item; }
    return stack.length;
  };
  stack.pop = () => {
    if (stack.length > 0) {
      const item = stack.items[--stack.length];
      delete stack.items[stack.length];
      if (item === stack.max) {
        let max = -Infinity;
        for (let i = 0; i < stack.length; i++) {
          if (stack.items[i] > max) {
            max = stack.items[i];
          }
        }
        stack.max = max;
      }
      return item;
    }
    return null;
  };
  stack.getMax = () => stack.max;
  return stack;
}

module.exports = Stack;
