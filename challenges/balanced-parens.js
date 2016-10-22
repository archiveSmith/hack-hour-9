/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  // getting all parens
  const store = { '(': ')', '[': ']', '{': '}' };
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const cur = input[i];
    if (cur in store) {
      stack.push(cur);
    } else if (cur === ')' || cur === ']' || cur === '}') {
      if (store[stack.pop()] !== cur) {
        return false;
      }
    }
  }
  return !stack.length;
}


module.exports = balancedParens;
