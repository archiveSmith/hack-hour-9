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

function balancedParens(input){
 let stack = [], cur;
  for (let i =0, len = input.length; i<len; i++) {
    cur = input[i];
    if ((cur === '(') || (cur === '{')) {
      stack.push(cur);
    } else if (cur === ')') {
      if (stack.pop() !== '(') return false; 
    } else if (cur ===  '}') {
      if (stack.pop() !== '{') return false;
    }
  }
  return stack.length === 0;
}

module.exports = balancedParens;
