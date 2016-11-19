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

 //Misunderstood prompt

function balancedParens(input){
  let parens = input.match(/[^a-z;:=. ]+/g).join('');
  let container = [];
  for(let i = 0; i < parens.length; i += 1) {
    let temp = parens[i];
    if(temp === '(' || temp === '[' || temp === '{') {
      container.push(temp); 
    } else {
      if (temp === ')' && container[container.length - 1] === '(') container.pop();
      else if (temp === '}' && container[container.length - 1] ) container.pop();
      else if (temp === ']' && container[container.length - 1] ) container.pop(); 
    }
  }
  return container.length ? false : true; 
}

module.exports = balancedParens;
