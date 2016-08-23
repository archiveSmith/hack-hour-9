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
  let brackets = {"[": "]", "{": "}", "(": ")"};
    let cache = [];
    let current;
    let popped;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "(" || input[i] === '[' || input[i] === '{') {
        current = input[i];
        cache.push(input[i]);
      } else {
        popped = cache.pop();
        //check for the matching closing bracket 
        if (current !== brackets[popped]) {
          return false;
        }
      }
    }
    
    if (cache.length) {
      return false;
    }
    return true;

}

module.exports = balancedParens;
