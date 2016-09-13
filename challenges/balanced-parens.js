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

  input = input.replace(/[^\[,\],\{,\},\(,\)]/gi, "");
  //   console.log('in', input);
  let check = [];
  //loop through string. if open bracket, find matching closed brack. if no closed bracket
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '[') {
      for (var j = i; j < input.length; j++) {
        if (input[j] === ']') {
          input = input.replace(/[\[,\]]/gi, "");
        };
      }
    }
  }

  for (var i = 0; i < input.length; i++) {
    if (input[i] === '{') {
      for (var j = i; j < input.length; j++) {
        if (input[j] === '}') {
          input = input.replace(/[\{,\}]/gi, "");
        };
      }
    }
  }

  for (var i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      for (var j = i; j < input.length; j++) {
        if (input[j] === ')') {
          input = input.replace(/[\(,\)]/gi, "");
        };
      }
    }
  }

  if (input.length > 0) {
    return false;
  } else {
    return true
  };

}

console.log(balancedParens('[d(ff]fdaf{fda)fafdsa}'));

module.exports = balancedParens;